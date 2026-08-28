# `apigatewayAuthorizer` Submodule <a name="`apigatewayAuthorizer` Submodule" id="@cdktn/provider-awscc.apigatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayAuthorizer <a name="ApigatewayAuthorizer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer awscc_apigateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizer;

ApigatewayAuthorizer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .restApiId(java.lang.String)
    .type(java.lang.String)
//  .authorizerCredentials(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .authType(java.lang.String)
//  .identitySource(java.lang.String)
//  .identityValidationExpression(java.lang.String)
//  .providerArNs(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.identitySource">identitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.providerArNs">providerArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}.

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.identitySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.identityValidationExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}.

---

##### `providerArNs`<sup>Optional</sup> <a name="providerArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.Initializer.parameter.providerArNs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerCredentials">resetAuthorizerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentitySource">resetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetProviderArNs">resetProviderArNs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthorizerCredentials` <a name="resetAuthorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerCredentials"></a>

```java
public void resetAuthorizerCredentials()
```

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetIdentitySource` <a name="resetIdentitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentitySource"></a>

```java
public void resetIdentitySource()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```

##### `resetProviderArNs` <a name="resetProviderArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.resetProviderArNs"></a>

```java
public void resetProviderArNs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayAuthorizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizer;

ApigatewayAuthorizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizer;

ApigatewayAuthorizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizer;

ApigatewayAuthorizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizer;

ApigatewayAuthorizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayAuthorizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayAuthorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentialsInput">authorizerCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySourceInput">identitySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNsInput">providerArNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySource">identitySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNs">providerArNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `authorizerCredentialsInput`<sup>Optional</sup> <a name="authorizerCredentialsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentialsInput"></a>

```java
public java.lang.String getAuthorizerCredentialsInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `identitySourceInput`<sup>Optional</sup> <a name="identitySourceInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySourceInput"></a>

```java
public java.lang.String getIdentitySourceInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerArNsInput`<sup>Optional</sup> <a name="providerArNsInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNsInput"></a>

```java
public java.util.List<java.lang.String> getProviderArNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerCredentials`<sup>Required</sup> <a name="authorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerCredentials"></a>

```java
public java.lang.String getAuthorizerCredentials();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identitySource"></a>

```java
public java.lang.String getIdentitySource();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerArNs`<sup>Required</sup> <a name="providerArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.providerArNs"></a>

```java
public java.util.List<java.lang.String> getProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayAuthorizerConfig <a name="ApigatewayAuthorizerConfig" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_authorizer.ApigatewayAuthorizerConfig;

ApigatewayAuthorizerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .restApiId(java.lang.String)
    .type(java.lang.String)
//  .authorizerCredentials(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .authType(java.lang.String)
//  .identitySource(java.lang.String)
//  .identityValidationExpression(java.lang.String)
//  .providerArNs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource">identitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs">providerArNs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#name ApigatewayAuthorizer#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#rest_api_id ApigatewayAuthorizer#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#type ApigatewayAuthorizer#type}.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerCredentials"></a>

```java
public java.lang.String getAuthorizerCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_credentials ApigatewayAuthorizer#authorizer_credentials}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_result_ttl_in_seconds ApigatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#authorizer_uri ApigatewayAuthorizer#authorizer_uri}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#auth_type ApigatewayAuthorizer#auth_type}.

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identitySource"></a>

```java
public java.lang.String getIdentitySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_source ApigatewayAuthorizer#identity_source}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#identity_validation_expression ApigatewayAuthorizer#identity_validation_expression}.

---

##### `providerArNs`<sup>Optional</sup> <a name="providerArNs" id="@cdktn/provider-awscc.apigatewayAuthorizer.ApigatewayAuthorizerConfig.property.providerArNs"></a>

```java
public java.util.List<java.lang.String> getProviderArNs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_authorizer#provider_ar_ns ApigatewayAuthorizer#provider_ar_ns}.

---



