# `apigatewayMethod` Submodule <a name="`apigatewayMethod` Submodule" id="@cdktn/provider-awscc.apigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayMethod <a name="ApigatewayMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethod(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  api_key_required: bool | IResolvable = None,
  authorization_scopes: typing.List[str] = None,
  authorization_type: str = None,
  authorizer_id: str = None,
  integration: ApigatewayMethodIntegration = None,
  method_responses: IResolvable | typing.List[ApigatewayMethodMethodResponses] = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameters: typing.Mapping[bool | IResolvable] = None,
  request_validator_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.apiKeyRequired">api_key_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.methodResponses">method_responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestParameters">request_parameters</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestValidatorId">request_validator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.apiKeyRequired"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationType"></a>

- *Type:* str

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.integration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `method_responses`<sup>Optional</sup> <a name="method_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.methodResponses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.operationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestModels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestParameters"></a>

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `request_validator_id`<sup>Optional</sup> <a name="request_validator_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestValidatorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration">put_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses">put_method_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired">reset_api_key_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes">reset_authorization_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration">reset_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses">reset_method_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName">reset_operation_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels">reset_request_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId">reset_request_validator_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_integration` <a name="put_integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration"></a>

```python
def put_integration(
  cache_key_parameters: typing.List[str] = None,
  cache_namespace: str = None,
  connection_id: str = None,
  connection_type: str = None,
  content_handling: str = None,
  credentials: str = None,
  integration_http_method: str = None,
  integration_responses: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses] = None,
  integration_target: str = None,
  passthrough_behavior: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_transfer_mode: str = None,
  timeout_in_millis: typing.Union[int, float] = None,
  type: str = None,
  uri: str = None
) -> None
```

###### `cache_key_parameters`<sup>Optional</sup> <a name="cache_key_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.cacheKeyParameters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

###### `cache_namespace`<sup>Optional</sup> <a name="cache_namespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.cacheNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

###### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

###### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

###### `content_handling`<sup>Optional</sup> <a name="content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.contentHandling"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

###### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

###### `integration_http_method`<sup>Optional</sup> <a name="integration_http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.integrationHttpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

###### `integration_responses`<sup>Optional</sup> <a name="integration_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.integrationResponses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

###### `integration_target`<sup>Optional</sup> <a name="integration_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.integrationTarget"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

###### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.passthroughBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

###### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.requestParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

###### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.requestTemplates"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

###### `response_transfer_mode`<sup>Optional</sup> <a name="response_transfer_mode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.responseTransferMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

###### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.timeoutInMillis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

##### `put_method_responses` <a name="put_method_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses"></a>

```python
def put_method_responses(
  value: IResolvable | typing.List[ApigatewayMethodMethodResponses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]

---

##### `reset_api_key_required` <a name="reset_api_key_required" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired"></a>

```python
def reset_api_key_required() -> None
```

##### `reset_authorization_scopes` <a name="reset_authorization_scopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes"></a>

```python
def reset_authorization_scopes() -> None
```

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_integration` <a name="reset_integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration"></a>

```python
def reset_integration() -> None
```

##### `reset_method_responses` <a name="reset_method_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses"></a>

```python
def reset_method_responses() -> None
```

##### `reset_operation_name` <a name="reset_operation_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName"></a>

```python
def reset_operation_name() -> None
```

##### `reset_request_models` <a name="reset_request_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels"></a>

```python
def reset_request_models() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_validator_id` <a name="reset_request_validator_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId"></a>

```python
def reset_request_validator_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigatewayMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses">method_responses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput">api_key_required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput">authorization_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput">integration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput">method_responses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput">operation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput">request_models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput">request_validator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired">api_key_required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId">request_validator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration"></a>

```python
integration: ApigatewayMethodIntegrationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a>

---

##### `method_responses`<sup>Required</sup> <a name="method_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses"></a>

```python
method_responses: ApigatewayMethodMethodResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a>

---

##### `api_key_required_input`<sup>Optional</sup> <a name="api_key_required_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput"></a>

```python
api_key_required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `authorization_scopes_input`<sup>Optional</sup> <a name="authorization_scopes_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput"></a>

```python
authorization_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput"></a>

```python
integration_input: IResolvable | ApigatewayMethodIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `method_responses_input`<sup>Optional</sup> <a name="method_responses_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput"></a>

```python
method_responses_input: IResolvable | typing.List[ApigatewayMethodMethodResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]

---

##### `operation_name_input`<sup>Optional</sup> <a name="operation_name_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput"></a>

```python
operation_name_input: str
```

- *Type:* str

---

##### `request_models_input`<sup>Optional</sup> <a name="request_models_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput"></a>

```python
request_models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

---

##### `request_validator_id_input`<sup>Optional</sup> <a name="request_validator_id_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput"></a>

```python
request_validator_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `api_key_required`<sup>Required</sup> <a name="api_key_required" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired"></a>

```python
api_key_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `authorization_scopes`<sup>Required</sup> <a name="authorization_scopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `request_models`<sup>Required</sup> <a name="request_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

---

##### `request_validator_id`<sup>Required</sup> <a name="request_validator_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId"></a>

```python
request_validator_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayMethodConfig <a name="ApigatewayMethodConfig" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  api_key_required: bool | IResolvable = None,
  authorization_scopes: typing.List[str] = None,
  authorization_type: str = None,
  authorizer_id: str = None,
  integration: ApigatewayMethodIntegration = None,
  method_responses: IResolvable | typing.List[ApigatewayMethodMethodResponses] = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameters: typing.Mapping[bool | IResolvable] = None,
  request_validator_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired">api_key_required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses">method_responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId">request_validator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired"></a>

```python
api_key_required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration"></a>

```python
integration: ApigatewayMethodIntegration
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `method_responses`<sup>Optional</sup> <a name="method_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses"></a>

```python
method_responses: IResolvable | typing.List[ApigatewayMethodMethodResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `request_validator_id`<sup>Optional</sup> <a name="request_validator_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId"></a>

```python
request_validator_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

### ApigatewayMethodIntegration <a name="ApigatewayMethodIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodIntegration(
  cache_key_parameters: typing.List[str] = None,
  cache_namespace: str = None,
  connection_id: str = None,
  connection_type: str = None,
  content_handling: str = None,
  credentials: str = None,
  integration_http_method: str = None,
  integration_responses: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses] = None,
  integration_target: str = None,
  passthrough_behavior: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_transfer_mode: str = None,
  timeout_in_millis: typing.Union[int, float] = None,
  type: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace">cache_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling">content_handling</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses">integration_responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget">integration_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode">response_transfer_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}. |

---

##### `cache_key_parameters`<sup>Optional</sup> <a name="cache_key_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters"></a>

```python
cache_key_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

##### `cache_namespace`<sup>Optional</sup> <a name="cache_namespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace"></a>

```python
cache_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

##### `content_handling`<sup>Optional</sup> <a name="content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

##### `integration_http_method`<sup>Optional</sup> <a name="integration_http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod"></a>

```python
integration_http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

##### `integration_responses`<sup>Optional</sup> <a name="integration_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses"></a>

```python
integration_responses: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

##### `integration_target`<sup>Optional</sup> <a name="integration_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget"></a>

```python
integration_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

##### `response_transfer_mode`<sup>Optional</sup> <a name="response_transfer_mode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode"></a>

```python
response_transfer_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

##### `timeout_in_millis`<sup>Optional</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

### ApigatewayMethodIntegrationIntegrationResponses <a name="ApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses(
  content_handling: str = None,
  response_parameters: typing.Mapping[str] = None,
  response_templates: typing.Mapping[str] = None,
  selection_pattern: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling">content_handling</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern">selection_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `content_handling`<sup>Optional</sup> <a name="content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `response_templates`<sup>Optional</sup> <a name="response_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}.

---

##### `selection_pattern`<sup>Optional</sup> <a name="selection_pattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern"></a>

```python
selection_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

### ApigatewayMethodMethodResponses <a name="ApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodMethodResponses(
  response_models: typing.Mapping[str] = None,
  response_parameters: typing.Mapping[bool | IResolvable] = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels">response_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `response_models`<sup>Optional</sup> <a name="response_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels"></a>

```python
response_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayMethodIntegrationIntegrationResponsesList <a name="ApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayMethodIntegrationIntegrationResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]

---


### ApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="ApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling">reset_content_handling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates">reset_response_templates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern">reset_selection_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_handling` <a name="reset_content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling"></a>

```python
def reset_content_handling() -> None
```

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```

##### `reset_response_templates` <a name="reset_response_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates"></a>

```python
def reset_response_templates() -> None
```

##### `reset_selection_pattern` <a name="reset_selection_pattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern"></a>

```python
def reset_selection_pattern() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput">content_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput">response_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput">response_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput">selection_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">content_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">selection_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_handling_input`<sup>Optional</sup> <a name="content_handling_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput"></a>

```python
content_handling_input: str
```

- *Type:* str

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput"></a>

```python
response_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_templates_input`<sup>Optional</sup> <a name="response_templates_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput"></a>

```python
response_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `selection_pattern_input`<sup>Optional</sup> <a name="selection_pattern_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput"></a>

```python
selection_pattern_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `content_handling`<sup>Required</sup> <a name="content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_templates`<sup>Required</sup> <a name="response_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `selection_pattern`<sup>Required</sup> <a name="selection_pattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```python
selection_pattern: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayMethodIntegrationIntegrationResponses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>

---


### ApigatewayMethodIntegrationOutputReference <a name="ApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses">put_integration_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters">reset_cache_key_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace">reset_cache_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling">reset_content_handling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod">reset_integration_http_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses">reset_integration_responses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget">reset_integration_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior">reset_passthrough_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates">reset_request_templates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode">reset_response_transfer_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis">reset_timeout_in_millis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_integration_responses` <a name="put_integration_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses"></a>

```python
def put_integration_responses(
  value: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]

---

##### `reset_cache_key_parameters` <a name="reset_cache_key_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters"></a>

```python
def reset_cache_key_parameters() -> None
```

##### `reset_cache_namespace` <a name="reset_cache_namespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace"></a>

```python
def reset_cache_namespace() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_content_handling` <a name="reset_content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling"></a>

```python
def reset_content_handling() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_integration_http_method` <a name="reset_integration_http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod"></a>

```python
def reset_integration_http_method() -> None
```

##### `reset_integration_responses` <a name="reset_integration_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses"></a>

```python
def reset_integration_responses() -> None
```

##### `reset_integration_target` <a name="reset_integration_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget"></a>

```python
def reset_integration_target() -> None
```

##### `reset_passthrough_behavior` <a name="reset_passthrough_behavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior"></a>

```python
def reset_passthrough_behavior() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_templates` <a name="reset_request_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates"></a>

```python
def reset_request_templates() -> None
```

##### `reset_response_transfer_mode` <a name="reset_response_transfer_mode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode"></a>

```python
def reset_response_transfer_mode() -> None
```

##### `reset_timeout_in_millis` <a name="reset_timeout_in_millis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis"></a>

```python
def reset_timeout_in_millis() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses">integration_responses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput">cache_key_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput">cache_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput">content_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput">integration_http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput">integration_responses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput">integration_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput">passthrough_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput">request_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput">response_transfer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput">timeout_in_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace">cache_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling">content_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget">integration_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode">response_transfer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">timeout_in_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_responses`<sup>Required</sup> <a name="integration_responses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```python
integration_responses: ApigatewayMethodIntegrationIntegrationResponsesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `cache_key_parameters_input`<sup>Optional</sup> <a name="cache_key_parameters_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput"></a>

```python
cache_key_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_namespace_input`<sup>Optional</sup> <a name="cache_namespace_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput"></a>

```python
cache_namespace_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `content_handling_input`<sup>Optional</sup> <a name="content_handling_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput"></a>

```python
content_handling_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `integration_http_method_input`<sup>Optional</sup> <a name="integration_http_method_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput"></a>

```python
integration_http_method_input: str
```

- *Type:* str

---

##### `integration_responses_input`<sup>Optional</sup> <a name="integration_responses_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput"></a>

```python
integration_responses_input: IResolvable | typing.List[ApigatewayMethodIntegrationIntegrationResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>]

---

##### `integration_target_input`<sup>Optional</sup> <a name="integration_target_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput"></a>

```python
integration_target_input: str
```

- *Type:* str

---

##### `passthrough_behavior_input`<sup>Optional</sup> <a name="passthrough_behavior_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput"></a>

```python
passthrough_behavior_input: str
```

- *Type:* str

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates_input`<sup>Optional</sup> <a name="request_templates_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput"></a>

```python
request_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_transfer_mode_input`<sup>Optional</sup> <a name="response_transfer_mode_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput"></a>

```python
response_transfer_mode_input: str
```

- *Type:* str

---

##### `timeout_in_millis_input`<sup>Optional</sup> <a name="timeout_in_millis_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput"></a>

```python
timeout_in_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `cache_key_parameters`<sup>Required</sup> <a name="cache_key_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```python
cache_key_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_namespace`<sup>Required</sup> <a name="cache_namespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```python
cache_namespace: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `content_handling`<sup>Required</sup> <a name="content_handling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `integration_http_method`<sup>Required</sup> <a name="integration_http_method" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```python
integration_http_method: str
```

- *Type:* str

---

##### `integration_target`<sup>Required</sup> <a name="integration_target" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```python
integration_target: str
```

- *Type:* str

---

##### `passthrough_behavior`<sup>Required</sup> <a name="passthrough_behavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates`<sup>Required</sup> <a name="request_templates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_transfer_mode`<sup>Required</sup> <a name="response_transfer_mode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```python
response_transfer_mode: str
```

- *Type:* str

---

##### `timeout_in_millis`<sup>Required</sup> <a name="timeout_in_millis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```python
timeout_in_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayMethodIntegration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---


### ApigatewayMethodMethodResponsesList <a name="ApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodMethodResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigatewayMethodMethodResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApigatewayMethodMethodResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>]

---


### ApigatewayMethodMethodResponsesOutputReference <a name="ApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigateway_method

apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels">reset_response_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_response_models` <a name="reset_response_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels"></a>

```python
def reset_response_models() -> None
```

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput">response_models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput">response_parameters_input</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels">response_models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[bool \| cdktn.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_models_input`<sup>Optional</sup> <a name="response_models_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput"></a>

```python
response_models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput"></a>

```python
response_parameters_input: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `response_models`<sup>Required</sup> <a name="response_models" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```python
response_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[bool | IResolvable]
```

- *Type:* typing.Mapping[bool | cdktn.IResolvable]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigatewayMethodMethodResponses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>

---



