# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktn/provider-awscc.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage awscc_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2Stage;

Apigatewayv2Stage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .stageName(java.lang.String)
//  .accessLogSettings(Apigatewayv2StageAccessLogSettings)
//  .autoDeploy(java.lang.Boolean|IResolvable)
//  .clientCertificateId(java.lang.String)
//  .defaultRouteSettings(Apigatewayv2StageDefaultRouteSettings)
//  .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .routeSettings(java.lang.String)
//  .stageVariables(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageName">stageName</a></code> | <code>java.lang.String</code> | The stage name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | Settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.autoDeploy">autoDeploy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether updates to an API automatically trigger a new deployment. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | The identifier of a client certificate for a Stage. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | The default route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the API stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.routeSettings">routeSettings</a></code> | <code>java.lang.String</code> | Route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageVariables">stageVariables</a></code> | <code>java.lang.String</code> | A map that defines the stage variables for a Stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageName"></a>

- *Type:* java.lang.String

The stage name.

Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_name Apigatewayv2Stage#stage_name}

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.accessLogSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

Settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `autoDeploy`<sup>Optional</sup> <a name="autoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.autoDeploy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether updates to an API automatically trigger a new deployment. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.clientCertificateId"></a>

- *Type:* java.lang.String

The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="defaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.defaultRouteSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

The default route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the API stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#description Apigatewayv2Stage#description}

---

##### `routeSettings`<sup>Optional</sup> <a name="routeSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.routeSettings"></a>

- *Type:* java.lang.String

Route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `stageVariables`<sup>Optional</sup> <a name="stageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageVariables"></a>

- *Type:* java.lang.String

A map that defines the stage variables for a Stage.

Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#tags Apigatewayv2Stage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">putDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">resetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">resetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">resetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">resetStageVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```java
public void putAccessLogSettings(Apigatewayv2StageAccessLogSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `putDefaultRouteSettings` <a name="putDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```java
public void putDefaultRouteSettings(Apigatewayv2StageDefaultRouteSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```java
public void resetAccessLogSettings()
```

##### `resetAutoDeploy` <a name="resetAutoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```java
public void resetAutoDeploy()
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```java
public void resetClientCertificateId()
```

##### `resetDefaultRouteSettings` <a name="resetDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```java
public void resetDefaultRouteSettings()
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRouteSettings` <a name="resetRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```java
public void resetRouteSettings()
```

##### `resetStageVariables` <a name="resetStageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```java
public void resetStageVariables()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2Stage;

Apigatewayv2Stage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2Stage;

Apigatewayv2Stage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2Stage;

Apigatewayv2Stage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2Stage;

Apigatewayv2Stage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2Stage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2Stage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2Stage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2Stage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Stage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">autoDeployInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">defaultRouteSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">routeSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">stageVariablesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">autoDeploy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">routeSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">stageVariables</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```java
public Apigatewayv2StageAccessLogSettingsOutputReference getAccessLogSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="defaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```java
public Apigatewayv2StageDefaultRouteSettingsOutputReference getDefaultRouteSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```java
public IResolvable|Apigatewayv2StageAccessLogSettings getAccessLogSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `autoDeployInput`<sup>Optional</sup> <a name="autoDeployInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeployInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```java
public java.lang.String getClientCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `defaultRouteSettingsInput`<sup>Optional</sup> <a name="defaultRouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```java
public IResolvable|Apigatewayv2StageDefaultRouteSettings getDefaultRouteSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `routeSettingsInput`<sup>Optional</sup> <a name="routeSettingsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```java
public java.lang.String getRouteSettingsInput();
```

- *Type:* java.lang.String

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `stageVariablesInput`<sup>Optional</sup> <a name="stageVariablesInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```java
public java.lang.String getStageVariablesInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `autoDeploy`<sup>Required</sup> <a name="autoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `routeSettings`<sup>Required</sup> <a name="routeSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```java
public java.lang.String getRouteSettings();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `stageVariables`<sup>Required</sup> <a name="stageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```java
public java.lang.String getStageVariables();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2StageAccessLogSettings;

Apigatewayv2StageAccessLogSettings.builder()
//  .destinationArn(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2StageConfig;

Apigatewayv2StageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .stageName(java.lang.String)
//  .accessLogSettings(Apigatewayv2StageAccessLogSettings)
//  .autoDeploy(java.lang.Boolean|IResolvable)
//  .clientCertificateId(java.lang.String)
//  .defaultRouteSettings(Apigatewayv2StageDefaultRouteSettings)
//  .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .routeSettings(java.lang.String)
//  .stageVariables(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName">stageName</a></code> | <code>java.lang.String</code> | The stage name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | Settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">autoDeploy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether updates to an API automatically trigger a new deployment. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | The identifier of a client certificate for a Stage. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | The default route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the API stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">routeSettings</a></code> | <code>java.lang.String</code> | Route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">stageVariables</a></code> | <code>java.lang.String</code> | A map that defines the stage variables for a Stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

The stage name.

Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_name Apigatewayv2Stage#stage_name}

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```java
public Apigatewayv2StageAccessLogSettings getAccessLogSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

Settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `autoDeploy`<sup>Optional</sup> <a name="autoDeploy" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether updates to an API automatically trigger a new deployment. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="defaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```java
public Apigatewayv2StageDefaultRouteSettings getDefaultRouteSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

The default route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the API stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#description Apigatewayv2Stage#description}

---

##### `routeSettings`<sup>Optional</sup> <a name="routeSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```java
public java.lang.String getRouteSettings();
```

- *Type:* java.lang.String

Route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `stageVariables`<sup>Optional</sup> <a name="stageVariables" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```java
public java.lang.String getStageVariables();
```

- *Type:* java.lang.String

A map that defines the stage variables for a Stage.

Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#tags Apigatewayv2Stage#tags}

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2StageDefaultRouteSettings;

Apigatewayv2StageDefaultRouteSettings.builder()
//  .dataTraceEnabled(java.lang.Boolean|IResolvable)
//  .detailedMetricsEnabled(java.lang.Boolean|IResolvable)
//  .loggingLevel(java.lang.String)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2StageAccessLogSettingsOutputReference;

new Apigatewayv2StageAccessLogSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2StageAccessLogSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_stage.Apigatewayv2StageDefaultRouteSettingsOutputReference;

new Apigatewayv2StageDefaultRouteSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">resetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```java
public void resetDataTraceEnabled()
```

##### `resetDetailedMetricsEnabled` <a name="resetDetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```java
public void resetDetailedMetricsEnabled()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailedMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detailedMetricsEnabledInput`<sup>Optional</sup> <a name="detailedMetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2StageDefaultRouteSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---



