# `apigatewayMethod` Submodule <a name="`apigatewayMethod` Submodule" id="@cdktn/provider-awscc.apigatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayMethod <a name="ApigatewayMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method awscc_apigateway_method}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethod;

ApigatewayMethod.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .integration(ApigatewayMethodIntegration)
//  .methodResponses(IResolvable|java.util.List<ApigatewayMethodMethodResponses>)
//  .operationName(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.Boolean|IResolvable>)
//  .requestValidatorId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.methodResponses">methodResponses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestValidatorId">requestValidatorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.apiKeyRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.authorizerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.integration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `methodResponses`<sup>Optional</sup> <a name="methodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.methodResponses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.operationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestModels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `requestValidatorId`<sup>Optional</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.Initializer.parameter.requestValidatorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses">putMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration">resetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses">resetMethodResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId">resetRequestValidatorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntegration` <a name="putIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration"></a>

```java
public void putIntegration(ApigatewayMethodIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `putMethodResponses` <a name="putMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses"></a>

```java
public void putMethodResponses(IResolvable|java.util.List<ApigatewayMethodMethodResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.putMethodResponses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>>

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetApiKeyRequired"></a>

```java
public void resetApiKeyRequired()
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationScopes"></a>

```java
public void resetAuthorizationScopes()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetAuthorizerId"></a>

```java
public void resetAuthorizerId()
```

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetIntegration"></a>

```java
public void resetIntegration()
```

##### `resetMethodResponses` <a name="resetMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetMethodResponses"></a>

```java
public void resetMethodResponses()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestModels"></a>

```java
public void resetRequestModels()
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestParameters"></a>

```java
public void resetRequestParameters()
```

##### `resetRequestValidatorId` <a name="resetRequestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.resetRequestValidatorId"></a>

```java
public void resetRequestValidatorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethod;

ApigatewayMethod.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethod;

ApigatewayMethod.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethod;

ApigatewayMethod.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethod;

ApigatewayMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayMethod resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses">methodResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput">authorizerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput">integrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput">methodResponsesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput">requestModelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput">requestParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput">requestValidatorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId">requestValidatorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integration"></a>

```java
public ApigatewayMethodIntegrationOutputReference getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference">ApigatewayMethodIntegrationOutputReference</a>

---

##### `methodResponses`<sup>Required</sup> <a name="methodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponses"></a>

```java
public ApigatewayMethodMethodResponsesList getMethodResponses();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList">ApigatewayMethodMethodResponsesList</a>

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerIdInput"></a>

```java
public java.lang.String getAuthorizerIdInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.integrationInput"></a>

```java
public IResolvable|ApigatewayMethodIntegration getIntegrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---

##### `methodResponsesInput`<sup>Optional</sup> <a name="methodResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.methodResponsesInput"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodMethodResponses> getMethodResponsesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>>

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getRequestParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

---

##### `requestValidatorIdInput`<sup>Optional</sup> <a name="requestValidatorIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorIdInput"></a>

```java
public java.lang.String getRequestValidatorIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

---

##### `requestValidatorId`<sup>Required</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.requestValidatorId"></a>

```java
public java.lang.String getRequestValidatorId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethod.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayMethodConfig <a name="ApigatewayMethodConfig" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodConfig;

ApigatewayMethodConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .integration(ApigatewayMethodIntegration)
//  .methodResponses(IResolvable|java.util.List<ApigatewayMethodMethodResponses>)
//  .operationName(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.Boolean|IResolvable>)
//  .requestValidatorId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The method's authorization type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | ``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses">methodResponses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId">requestValidatorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#http_method ApigatewayMethod#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#resource_id ApigatewayMethod#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#rest_api_id ApigatewayMethod#rest_api_id}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#api_key_required ApigatewayMethod#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_scopes ApigatewayMethod#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

The method's authorization type.

This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorization_type ApigatewayMethod#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#authorizer_id ApigatewayMethod#authorizer_id}.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.integration"></a>

```java
public ApigatewayMethodIntegration getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

``Integration`` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration ApigatewayMethod#integration}

---

##### `methodResponses`<sup>Optional</sup> <a name="methodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.methodResponses"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodMethodResponses> getMethodResponses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#method_responses ApigatewayMethod#method_responses}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#operation_name ApigatewayMethod#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_models ApigatewayMethod#request_models}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `requestValidatorId`<sup>Optional</sup> <a name="requestValidatorId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodConfig.property.requestValidatorId"></a>

```java
public java.lang.String getRequestValidatorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_validator_id ApigatewayMethod#request_validator_id}.

---

### ApigatewayMethodIntegration <a name="ApigatewayMethodIntegration" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodIntegration;

ApigatewayMethodIntegration.builder()
//  .cacheKeyParameters(java.util.List<java.lang.String>)
//  .cacheNamespace(java.lang.String)
//  .connectionId(java.lang.String)
//  .connectionType(java.lang.String)
//  .contentHandling(java.lang.String)
//  .credentials(java.lang.String)
//  .integrationHttpMethod(java.lang.String)
//  .integrationResponses(IResolvable|java.util.List<ApigatewayMethodIntegrationIntegrationResponses>)
//  .integrationTarget(java.lang.String)
//  .passthroughBehavior(java.lang.String)
//  .requestParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .requestTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTransferMode(java.lang.String)
//  .timeoutInMillis(java.lang.Number)
//  .type(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace">cacheNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials">credentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses">integrationResponses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget">integrationTarget</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode">responseTransferMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}. |

---

##### `cacheKeyParameters`<sup>Optional</sup> <a name="cacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheKeyParameters"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_key_parameters ApigatewayMethod#cache_key_parameters}.

---

##### `cacheNamespace`<sup>Optional</sup> <a name="cacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.cacheNamespace"></a>

```java
public java.lang.String getCacheNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#cache_namespace ApigatewayMethod#cache_namespace}.

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_id ApigatewayMethod#connection_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#connection_type ApigatewayMethod#connection_type}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#credentials ApigatewayMethod#credentials}.

---

##### `integrationHttpMethod`<sup>Optional</sup> <a name="integrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationHttpMethod"></a>

```java
public java.lang.String getIntegrationHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_http_method ApigatewayMethod#integration_http_method}.

---

##### `integrationResponses`<sup>Optional</sup> <a name="integrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationResponses"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodIntegrationIntegrationResponses> getIntegrationResponses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_responses ApigatewayMethod#integration_responses}.

---

##### `integrationTarget`<sup>Optional</sup> <a name="integrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.integrationTarget"></a>

```java
public java.lang.String getIntegrationTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#integration_target ApigatewayMethod#integration_target}.

---

##### `passthroughBehavior`<sup>Optional</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#passthrough_behavior ApigatewayMethod#passthrough_behavior}.

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_parameters ApigatewayMethod#request_parameters}.

---

##### `requestTemplates`<sup>Optional</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#request_templates ApigatewayMethod#request_templates}.

---

##### `responseTransferMode`<sup>Optional</sup> <a name="responseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.responseTransferMode"></a>

```java
public java.lang.String getResponseTransferMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_transfer_mode ApigatewayMethod#response_transfer_mode}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#timeout_in_millis ApigatewayMethod#timeout_in_millis}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#type ApigatewayMethod#type}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#uri ApigatewayMethod#uri}.

---

### ApigatewayMethodIntegrationIntegrationResponses <a name="ApigatewayMethodIntegrationIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodIntegrationIntegrationResponses;

ApigatewayMethodIntegrationIntegrationResponses.builder()
//  .contentHandling(java.lang.String)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .selectionPattern(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern">selectionPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#content_handling ApigatewayMethod#content_handling}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_templates ApigatewayMethod#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.selectionPattern"></a>

```java
public java.lang.String getSelectionPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#selection_pattern ApigatewayMethod#selection_pattern}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

### ApigatewayMethodMethodResponses <a name="ApigatewayMethodMethodResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodMethodResponses;

ApigatewayMethodMethodResponses.builder()
//  .responseModels(java.util.Map<java.lang.String, java.lang.String>)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.Boolean|IResolvable>)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels">responseModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}. |

---

##### `responseModels`<sup>Optional</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_models ApigatewayMethod#response_models}.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#response_parameters ApigatewayMethod#response_parameters}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_method#status_code ApigatewayMethod#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayMethodIntegrationIntegrationResponsesList <a name="ApigatewayMethodIntegrationIntegrationResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodIntegrationIntegrationResponsesList;

new ApigatewayMethodIntegrationIntegrationResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get"></a>

```java
public ApigatewayMethodIntegrationIntegrationResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodIntegrationIntegrationResponses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>>

---


### ApigatewayMethodIntegrationIntegrationResponsesOutputReference <a name="ApigatewayMethodIntegrationIntegrationResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodIntegrationIntegrationResponsesOutputReference;

new ApigatewayMethodIntegrationIntegrationResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern">resetSelectionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetContentHandling"></a>

```java
public void resetContentHandling()
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseParameters"></a>

```java
public void resetResponseParameters()
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetResponseTemplates"></a>

```java
public void resetResponseTemplates()
```

##### `resetSelectionPattern` <a name="resetSelectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetSelectionPattern"></a>

```java
public void resetSelectionPattern()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput">contentHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput">responseParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput">selectionPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern">selectionPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandlingInput"></a>

```java
public java.lang.String getContentHandlingInput();
```

- *Type:* java.lang.String

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `selectionPatternInput`<sup>Optional</sup> <a name="selectionPatternInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPatternInput"></a>

```java
public java.lang.String getSelectionPatternInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.selectionPattern"></a>

```java
public java.lang.String getSelectionPattern();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayMethodIntegrationIntegrationResponses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>

---


### ApigatewayMethodIntegrationOutputReference <a name="ApigatewayMethodIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodIntegrationOutputReference;

new ApigatewayMethodIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses">putIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters">resetCacheKeyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace">resetCacheNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod">resetIntegrationHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses">resetIntegrationResponses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget">resetIntegrationTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior">resetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates">resetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode">resetResponseTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIntegrationResponses` <a name="putIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses"></a>

```java
public void putIntegrationResponses(IResolvable|java.util.List<ApigatewayMethodIntegrationIntegrationResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.putIntegrationResponses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>>

---

##### `resetCacheKeyParameters` <a name="resetCacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheKeyParameters"></a>

```java
public void resetCacheKeyParameters()
```

##### `resetCacheNamespace` <a name="resetCacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCacheNamespace"></a>

```java
public void resetCacheNamespace()
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionId"></a>

```java
public void resetConnectionId()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetContentHandling"></a>

```java
public void resetContentHandling()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetIntegrationHttpMethod` <a name="resetIntegrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationHttpMethod"></a>

```java
public void resetIntegrationHttpMethod()
```

##### `resetIntegrationResponses` <a name="resetIntegrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationResponses"></a>

```java
public void resetIntegrationResponses()
```

##### `resetIntegrationTarget` <a name="resetIntegrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetIntegrationTarget"></a>

```java
public void resetIntegrationTarget()
```

##### `resetPassthroughBehavior` <a name="resetPassthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetPassthroughBehavior"></a>

```java
public void resetPassthroughBehavior()
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestParameters"></a>

```java
public void resetRequestParameters()
```

##### `resetRequestTemplates` <a name="resetRequestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetRequestTemplates"></a>

```java
public void resetRequestTemplates()
```

##### `resetResponseTransferMode` <a name="resetResponseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetResponseTransferMode"></a>

```java
public void resetResponseTransferMode()
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetTimeoutInMillis"></a>

```java
public void resetTimeoutInMillis()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses">integrationResponses</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput">cacheKeyParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput">cacheNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput">contentHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput">integrationHttpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput">integrationResponsesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput">integrationTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput">passthroughBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput">requestParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput">requestTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput">responseTransferModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters">cacheKeyParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace">cacheNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials">credentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod">integrationHttpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget">integrationTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior">passthroughBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters">requestParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates">requestTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode">responseTransferMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integrationResponses`<sup>Required</sup> <a name="integrationResponses" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponses"></a>

```java
public ApigatewayMethodIntegrationIntegrationResponsesList getIntegrationResponses();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponsesList">ApigatewayMethodIntegrationIntegrationResponsesList</a>

---

##### `cacheKeyParametersInput`<sup>Optional</sup> <a name="cacheKeyParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParametersInput"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheNamespaceInput`<sup>Optional</sup> <a name="cacheNamespaceInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespaceInput"></a>

```java
public java.lang.String getCacheNamespaceInput();
```

- *Type:* java.lang.String

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionIdInput"></a>

```java
public java.lang.String getConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandlingInput"></a>

```java
public java.lang.String getContentHandlingInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentialsInput"></a>

```java
public java.lang.String getCredentialsInput();
```

- *Type:* java.lang.String

---

##### `integrationHttpMethodInput`<sup>Optional</sup> <a name="integrationHttpMethodInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethodInput"></a>

```java
public java.lang.String getIntegrationHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `integrationResponsesInput`<sup>Optional</sup> <a name="integrationResponsesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationResponsesInput"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodIntegrationIntegrationResponses> getIntegrationResponsesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationIntegrationResponses">ApigatewayMethodIntegrationIntegrationResponses</a>>

---

##### `integrationTargetInput`<sup>Optional</sup> <a name="integrationTargetInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTargetInput"></a>

```java
public java.lang.String getIntegrationTargetInput();
```

- *Type:* java.lang.String

---

##### `passthroughBehaviorInput`<sup>Optional</sup> <a name="passthroughBehaviorInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehaviorInput"></a>

```java
public java.lang.String getPassthroughBehaviorInput();
```

- *Type:* java.lang.String

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplatesInput`<sup>Optional</sup> <a name="requestTemplatesInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTransferModeInput`<sup>Optional</sup> <a name="responseTransferModeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferModeInput"></a>

```java
public java.lang.String getResponseTransferModeInput();
```

- *Type:* java.lang.String

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillisInput"></a>

```java
public java.lang.Number getTimeoutInMillisInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `cacheKeyParameters`<sup>Required</sup> <a name="cacheKeyParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheKeyParameters"></a>

```java
public java.util.List<java.lang.String> getCacheKeyParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheNamespace`<sup>Required</sup> <a name="cacheNamespace" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.cacheNamespace"></a>

```java
public java.lang.String getCacheNamespace();
```

- *Type:* java.lang.String

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.credentials"></a>

```java
public java.lang.String getCredentials();
```

- *Type:* java.lang.String

---

##### `integrationHttpMethod`<sup>Required</sup> <a name="integrationHttpMethod" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationHttpMethod"></a>

```java
public java.lang.String getIntegrationHttpMethod();
```

- *Type:* java.lang.String

---

##### `integrationTarget`<sup>Required</sup> <a name="integrationTarget" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.integrationTarget"></a>

```java
public java.lang.String getIntegrationTarget();
```

- *Type:* java.lang.String

---

##### `passthroughBehavior`<sup>Required</sup> <a name="passthroughBehavior" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.passthroughBehavior"></a>

```java
public java.lang.String getPassthroughBehavior();
```

- *Type:* java.lang.String

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestTemplates`<sup>Required</sup> <a name="requestTemplates" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.requestTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTransferMode`<sup>Required</sup> <a name="responseTransferMode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.responseTransferMode"></a>

```java
public java.lang.String getResponseTransferMode();
```

- *Type:* java.lang.String

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegrationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayMethodIntegration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodIntegration">ApigatewayMethodIntegration</a>

---


### ApigatewayMethodMethodResponsesList <a name="ApigatewayMethodMethodResponsesList" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodMethodResponsesList;

new ApigatewayMethodMethodResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get"></a>

```java
public ApigatewayMethodMethodResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayMethodMethodResponses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>>

---


### ApigatewayMethodMethodResponsesOutputReference <a name="ApigatewayMethodMethodResponsesOutputReference" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_method.ApigatewayMethodMethodResponsesOutputReference;

new ApigatewayMethodMethodResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels">resetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseModels` <a name="resetResponseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseModels"></a>

```java
public void resetResponseModels()
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetResponseParameters"></a>

```java
public void resetResponseParameters()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput">responseModelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput">responseParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels">responseModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|io.cdktn.cdktn.IResolvable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responseModelsInput`<sup>Optional</sup> <a name="responseModelsInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseModelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getResponseParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|io.cdktn.cdktn.IResolvable>

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponsesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayMethodMethodResponses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayMethod.ApigatewayMethodMethodResponses">ApigatewayMethodMethodResponses</a>

---



