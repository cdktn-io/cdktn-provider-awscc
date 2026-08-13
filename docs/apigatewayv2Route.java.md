# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktn/provider-awscc.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route awscc_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .requestModels(java.lang.String)
//  .requestParameters(java.lang.String)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey">routeKey</a></code> | <code>java.lang.String</code> | The route key for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether an API key is required for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | The authorization scopes supported by this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The authorization type for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | The identifier of the ``Authorizer`` resource to be associated with this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | The model selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName">operationName</a></code> | <code>java.lang.String</code> | The operation name for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels">requestModels</a></code> | <code>java.lang.String</code> | The request models for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameters">requestParameters</a></code> | <code>java.lang.String</code> | The request parameters for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | The route response selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | The target for the route. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey"></a>

- *Type:* java.lang.String

The route key for the route.

For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether an API key is required for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes"></a>

- *Type:* java.util.List<java.lang.String>

The authorization scopes supported by this route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

The authorization type for the route.

For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId"></a>

- *Type:* java.lang.String

The identifier of the ``Authorizer`` resource to be associated with this route.

The authorizer identifier is generated by API Gateway when you created the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression"></a>

- *Type:* java.lang.String

The model selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName"></a>

- *Type:* java.lang.String

The operation name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels"></a>

- *Type:* java.lang.String

The request models for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameters"></a>

- *Type:* java.lang.String

The request parameters for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_parameters Apigatewayv2Route#request_parameters}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression"></a>

- *Type:* java.lang.String

The route response selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target"></a>

- *Type:* java.lang.String

The target for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters">resetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">resetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```java
public void resetApiKeyRequired()
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```java
public void resetAuthorizationScopes()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```java
public void resetAuthorizerId()
```

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```java
public void resetModelSelectionExpression()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```java
public void resetRequestModels()
```

##### `resetRequestParameters` <a name="resetRequestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRequestParameters"></a>

```java
public void resetRequestParameters()
```

##### `resetRouteResponseSelectionExpression` <a name="resetRouteResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```java
public void resetRouteResponseSelectionExpression()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2Route to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId">routeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">authorizerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">requestModelsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput">requestParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">routeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">routeResponseSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels">requestModels</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters">requestParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeId"></a>

```java
public java.lang.String getRouteId();
```

- *Type:* java.lang.String

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```java
public java.lang.String getAuthorizerIdInput();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```java
public java.lang.String getModelSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```java
public java.lang.String getRequestModelsInput();
```

- *Type:* java.lang.String

---

##### `requestParametersInput`<sup>Optional</sup> <a name="requestParametersInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParametersInput"></a>

```java
public java.lang.String getRequestParametersInput();
```

- *Type:* java.lang.String

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```java
public java.lang.String getRouteKeyInput();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpressionInput`<sup>Optional</sup> <a name="routeResponseSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```java
public java.lang.String getRouteResponseSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```java
public java.lang.String getRequestModels();
```

- *Type:* java.lang.String

---

##### `requestParameters`<sup>Required</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.requestParameters"></a>

```java
public java.lang.String getRequestParameters();
```

- *Type:* java.lang.String

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_route.Apigatewayv2RouteConfig;

Apigatewayv2RouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .requestModels(java.lang.String)
//  .requestParameters(java.lang.String)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | The route key for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether an API key is required for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | The authorization scopes supported by this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The authorization type for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | The identifier of the ``Authorizer`` resource to be associated with this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | The model selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">operationName</a></code> | <code>java.lang.String</code> | The operation name for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">requestModels</a></code> | <code>java.lang.String</code> | The request models for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters">requestParameters</a></code> | <code>java.lang.String</code> | The request parameters for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | The route response selection expression for the route. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">target</a></code> | <code>java.lang.String</code> | The target for the route. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

The route key for the route.

For HTTP APIs, the route key can be either `$default`, or a combination of an HTTP method and resource path, for example, `GET /pets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether an API key is required for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

The authorization scopes supported by this route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

The authorization type for the route.

For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

The identifier of the ``Authorizer`` resource to be associated with this route.

The authorizer identifier is generated by API Gateway when you created the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

The model selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

The operation name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```java
public java.lang.String getRequestModels();
```

- *Type:* java.lang.String

The request models for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}

---

##### `requestParameters`<sup>Optional</sup> <a name="requestParameters" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameters"></a>

```java
public java.lang.String getRequestParameters();
```

- *Type:* java.lang.String

The request parameters for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#request_parameters Apigatewayv2Route#request_parameters}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

The route response selection expression for the route. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The target for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}

---



