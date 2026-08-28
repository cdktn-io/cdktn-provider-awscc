# `apigatewayv2ApiGatewayManagedOverrides` Submodule <a name="`apigatewayv2ApiGatewayManagedOverrides` Submodule" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2ApiGatewayManagedOverrides <a name="Apigatewayv2ApiGatewayManagedOverrides" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides awscc_apigatewayv2_api_gateway_managed_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverrides;

Apigatewayv2ApiGatewayManagedOverrides.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
//  .integration(Apigatewayv2ApiGatewayManagedOverridesIntegration)
//  .route(Apigatewayv2ApiGatewayManagedOverridesRoute)
//  .stage(Apigatewayv2ApiGatewayManagedOverridesStage)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | The ID of the API for which to override the configuration of API Gateway-managed resources. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | Overrides the integration configuration for an API Gateway-managed integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.route">route</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a></code> | Overrides the route configuration for an API Gateway-managed route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.stage">stage</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a></code> | Overrides the stage configuration for an API Gateway-managed stage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

The ID of the API for which to override the configuration of API Gateway-managed resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#api_id Apigatewayv2ApiGatewayManagedOverrides#api_id}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.integration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a>

Overrides the integration configuration for an API Gateway-managed integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#integration Apigatewayv2ApiGatewayManagedOverrides#integration}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.route"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a>

Overrides the route configuration for an API Gateway-managed route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#route Apigatewayv2ApiGatewayManagedOverrides#route}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.Initializer.parameter.stage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a>

Overrides the stage configuration for an API Gateway-managed stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#stage Apigatewayv2ApiGatewayManagedOverrides#stage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putIntegration">putIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putStage">putStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetIntegration">resetIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetStage">resetStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIntegration` <a name="putIntegration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putIntegration"></a>

```java
public void putIntegration(Apigatewayv2ApiGatewayManagedOverridesIntegration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a>

---

##### `putRoute` <a name="putRoute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putRoute"></a>

```java
public void putRoute(Apigatewayv2ApiGatewayManagedOverridesRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a>

---

##### `putStage` <a name="putStage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putStage"></a>

```java
public void putStage(Apigatewayv2ApiGatewayManagedOverridesStage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.putStage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a>

---

##### `resetIntegration` <a name="resetIntegration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetIntegration"></a>

```java
public void resetIntegration()
```

##### `resetRoute` <a name="resetRoute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetRoute"></a>

```java
public void resetRoute()
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.resetStage"></a>

```java
public void resetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverrides;

Apigatewayv2ApiGatewayManagedOverrides.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverrides;

Apigatewayv2ApiGatewayManagedOverrides.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverrides;

Apigatewayv2ApiGatewayManagedOverrides.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverrides;

Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2ApiGatewayManagedOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2ApiGatewayManagedOverrides to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2ApiGatewayManagedOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2ApiGatewayManagedOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId">apiGatewayManagedOverridesId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.route">route</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference">Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.stage">stage</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.integrationInput">integrationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.routeInput">routeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.stageInput">stageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiGatewayManagedOverridesId`<sup>Required</sup> <a name="apiGatewayManagedOverridesId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiGatewayManagedOverridesId"></a>

```java
public java.lang.String getApiGatewayManagedOverridesId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.integration"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference">Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.route"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference getRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference">Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference</a>

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.stage"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageOutputReference getStage();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.integrationInput"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesIntegration getIntegrationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a>

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.routeInput"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesRoute getRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a>

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.stageInput"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStage getStageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverrides.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2ApiGatewayManagedOverridesConfig <a name="Apigatewayv2ApiGatewayManagedOverridesConfig" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesConfig;

Apigatewayv2ApiGatewayManagedOverridesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
//  .integration(Apigatewayv2ApiGatewayManagedOverridesIntegration)
//  .route(Apigatewayv2ApiGatewayManagedOverridesRoute)
//  .stage(Apigatewayv2ApiGatewayManagedOverridesStage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | The ID of the API for which to override the configuration of API Gateway-managed resources. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.integration">integration</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | Overrides the integration configuration for an API Gateway-managed integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.route">route</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a></code> | Overrides the route configuration for an API Gateway-managed route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.stage">stage</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a></code> | Overrides the stage configuration for an API Gateway-managed stage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

The ID of the API for which to override the configuration of API Gateway-managed resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#api_id Apigatewayv2ApiGatewayManagedOverrides#api_id}

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.integration"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesIntegration getIntegration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a>

Overrides the integration configuration for an API Gateway-managed integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#integration Apigatewayv2ApiGatewayManagedOverrides#integration}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.route"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesRoute getRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a>

Overrides the route configuration for an API Gateway-managed route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#route Apigatewayv2ApiGatewayManagedOverrides#route}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesConfig.property.stage"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStage getStage();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a>

Overrides the stage configuration for an API Gateway-managed stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#stage Apigatewayv2ApiGatewayManagedOverrides#stage}

---

### Apigatewayv2ApiGatewayManagedOverridesIntegration <a name="Apigatewayv2ApiGatewayManagedOverridesIntegration" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesIntegration;

Apigatewayv2ApiGatewayManagedOverridesIntegration.builder()
//  .description(java.lang.String)
//  .integrationMethod(java.lang.String)
//  .payloadFormatVersion(java.lang.String)
//  .timeoutInMillis(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.description">description</a></code> | <code>java.lang.String</code> | The description of the integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.integrationMethod">integrationMethod</a></code> | <code>java.lang.String</code> | Specifies the integration's HTTP method type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>java.lang.String</code> | Specifies the format of the payload sent to an integration. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#description Apigatewayv2ApiGatewayManagedOverrides#description}

---

##### `integrationMethod`<sup>Optional</sup> <a name="integrationMethod" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.integrationMethod"></a>

```java
public java.lang.String getIntegrationMethod();
```

- *Type:* java.lang.String

Specifies the integration's HTTP method type.

For WebSocket APIs, if you use a Lambda integration, you must set the integration method to POST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#integration_method Apigatewayv2ApiGatewayManagedOverrides#integration_method}

---

##### `payloadFormatVersion`<sup>Optional</sup> <a name="payloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.payloadFormatVersion"></a>

```java
public java.lang.String getPayloadFormatVersion();
```

- *Type:* java.lang.String

Specifies the format of the payload sent to an integration.

Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#payload_format_version Apigatewayv2ApiGatewayManagedOverrides#payload_format_version}

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.

The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#timeout_in_millis Apigatewayv2ApiGatewayManagedOverrides#timeout_in_millis}

---

### Apigatewayv2ApiGatewayManagedOverridesRoute <a name="Apigatewayv2ApiGatewayManagedOverridesRoute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesRoute;

Apigatewayv2ApiGatewayManagedOverridesRoute.builder()
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .operationName(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | The authorization scopes supported by this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | The authorization type for the route. To learn more, see AuthorizationType. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | The identifier of the Authorizer resource to be associated with this route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.operationName">operationName</a></code> | <code>java.lang.String</code> | The operation name for the route. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.target">target</a></code> | <code>java.lang.String</code> | For HTTP integrations, specify a fully qualified URL. |

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

The authorization scopes supported by this route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorization_scopes Apigatewayv2ApiGatewayManagedOverrides#authorization_scopes}

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

The authorization type for the route. To learn more, see AuthorizationType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorization_type Apigatewayv2ApiGatewayManagedOverrides#authorization_type}

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

The identifier of the Authorizer resource to be associated with this route.

The authorizer identifier is generated by API Gateway when you created the authorizer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#authorizer_id Apigatewayv2ApiGatewayManagedOverrides#authorizer_id}

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

The operation name for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#operation_name Apigatewayv2ApiGatewayManagedOverrides#operation_name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

For HTTP integrations, specify a fully qualified URL.

For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#target Apigatewayv2ApiGatewayManagedOverrides#target}

---

### Apigatewayv2ApiGatewayManagedOverridesStage <a name="Apigatewayv2ApiGatewayManagedOverridesStage" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStage;

Apigatewayv2ApiGatewayManagedOverridesStage.builder()
//  .accessLogSettings(Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings)
//  .autoDeploy(java.lang.Boolean|IResolvable)
//  .defaultRouteSettings(Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings)
//  .description(java.lang.String)
//  .routeSettings(IResolvable|java.util.Map<java.lang.String, Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings>)
//  .stageVariables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a></code> | Settings for logging access in a stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.autoDeploy">autoDeploy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether updates to an API automatically trigger a new deployment. The default value is true. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a></code> | The default route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.description">description</a></code> | <code>java.lang.String</code> | The description for the API stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.routeSettings">routeSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>></code> | Route settings for the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.stageVariables">stageVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map that defines the stage variables for a Stage. |

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.accessLogSettings"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings getAccessLogSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

Settings for logging access in a stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#access_log_settings Apigatewayv2ApiGatewayManagedOverrides#access_log_settings}

---

##### `autoDeploy`<sup>Optional</sup> <a name="autoDeploy" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.autoDeploy"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether updates to an API automatically trigger a new deployment. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#auto_deploy Apigatewayv2ApiGatewayManagedOverrides#auto_deploy}

---

##### `defaultRouteSettings`<sup>Optional</sup> <a name="defaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.defaultRouteSettings"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings getDefaultRouteSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

The default route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#default_route_settings Apigatewayv2ApiGatewayManagedOverrides#default_route_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the API stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#description Apigatewayv2ApiGatewayManagedOverrides#description}

---

##### `routeSettings`<sup>Optional</sup> <a name="routeSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.routeSettings"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings> getRouteSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>>

Route settings for the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#route_settings Apigatewayv2ApiGatewayManagedOverrides#route_settings}

---

##### `stageVariables`<sup>Optional</sup> <a name="stageVariables" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage.property.stageVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map that defines the stage variables for a Stage.

Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#stage_variables Apigatewayv2ApiGatewayManagedOverrides#stage_variables}

---

### Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings <a name="Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings;

Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.builder()
//  .destinationArn(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | The ARN of the CloudWatch Logs log group to receive access logs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.property.format">format</a></code> | <code>java.lang.String</code> | A single line format of the access logs of data, as specified by selected $context variables. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

The ARN of the CloudWatch Logs log group to receive access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#destination_arn Apigatewayv2ApiGatewayManagedOverrides#destination_arn}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

A single line format of the access logs of data, as specified by selected $context variables.

The format must include at least $context.requestId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#format Apigatewayv2ApiGatewayManagedOverrides#format}

---

### Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings <a name="Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings;

Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.builder()
//  .detailedMetricsEnabled(java.lang.Boolean|IResolvable)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed metrics are enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | Specifies the throttling burst limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | Specifies the throttling rate limit. |

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#detailed_metrics_enabled Apigatewayv2ApiGatewayManagedOverrides#detailed_metrics_enabled}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

Specifies the throttling burst limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_burst_limit Apigatewayv2ApiGatewayManagedOverrides#throttling_burst_limit}

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

Specifies the throttling rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_rate_limit Apigatewayv2ApiGatewayManagedOverrides#throttling_rate_limit}

---

### Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings <a name="Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings;

Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.builder()
//  .detailedMetricsEnabled(java.lang.Boolean|IResolvable)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether detailed metrics are enabled. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | Specifies the throttling burst limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | Specifies the throttling rate limit. |

---

##### `detailedMetricsEnabled`<sup>Optional</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether detailed metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#detailed_metrics_enabled Apigatewayv2ApiGatewayManagedOverrides#detailed_metrics_enabled}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

Specifies the throttling burst limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_burst_limit Apigatewayv2ApiGatewayManagedOverrides#throttling_burst_limit}

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

Specifies the throttling rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_api_gateway_managed_overrides#throttling_rate_limit Apigatewayv2ApiGatewayManagedOverrides#throttling_rate_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetIntegrationMethod">resetIntegrationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetPayloadFormatVersion">resetPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIntegrationMethod` <a name="resetIntegrationMethod" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetIntegrationMethod"></a>

```java
public void resetIntegrationMethod()
```

##### `resetPayloadFormatVersion` <a name="resetPayloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetPayloadFormatVersion"></a>

```java
public void resetPayloadFormatVersion()
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.resetTimeoutInMillis"></a>

```java
public void resetTimeoutInMillis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethodInput">integrationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersionInput">payloadFormatVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod">integrationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion">payloadFormatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `integrationMethodInput`<sup>Optional</sup> <a name="integrationMethodInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethodInput"></a>

```java
public java.lang.String getIntegrationMethodInput();
```

- *Type:* java.lang.String

---

##### `payloadFormatVersionInput`<sup>Optional</sup> <a name="payloadFormatVersionInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersionInput"></a>

```java
public java.lang.String getPayloadFormatVersionInput();
```

- *Type:* java.lang.String

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillisInput"></a>

```java
public java.lang.Number getTimeoutInMillisInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `integrationMethod`<sup>Required</sup> <a name="integrationMethod" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.integrationMethod"></a>

```java
public java.lang.String getIntegrationMethod();
```

- *Type:* java.lang.String

---

##### `payloadFormatVersion`<sup>Required</sup> <a name="payloadFormatVersion" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.payloadFormatVersion"></a>

```java
public java.lang.String getPayloadFormatVersion();
```

- *Type:* java.lang.String

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegrationOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesIntegration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesIntegration">Apigatewayv2ApiGatewayManagedOverridesIntegration</a>

---


### Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizationScopes"></a>

```java
public void resetAuthorizationScopes()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetAuthorizerId"></a>

```java
public void resetAuthorizerId()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerIdInput">authorizerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerIdInput"></a>

```java
public java.lang.String getAuthorizerIdInput();
```

- *Type:* java.lang.String

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesRoute">Apigatewayv2ApiGatewayManagedOverridesRoute</a>

---


### Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

---


### Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">resetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetailedMetricsEnabled` <a name="resetDetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```java
public void resetDetailedMetricsEnabled()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailedMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detailedMetricsEnabledInput`<sup>Optional</sup> <a name="detailedMetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

---


### Apigatewayv2ApiGatewayManagedOverridesStageOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesStageOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putDefaultRouteSettings">putDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putRouteSettings">putRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetAutoDeploy">resetAutoDeploy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetDefaultRouteSettings">resetDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetRouteSettings">resetRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetStageVariables">resetStageVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putAccessLogSettings"></a>

```java
public void putAccessLogSettings(Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

---

##### `putDefaultRouteSettings` <a name="putDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putDefaultRouteSettings"></a>

```java
public void putDefaultRouteSettings(Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putDefaultRouteSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

---

##### `putRouteSettings` <a name="putRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putRouteSettings"></a>

```java
public void putRouteSettings(IResolvable|java.util.Map<java.lang.String, Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.putRouteSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>>

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetAccessLogSettings"></a>

```java
public void resetAccessLogSettings()
```

##### `resetAutoDeploy` <a name="resetAutoDeploy" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetAutoDeploy"></a>

```java
public void resetAutoDeploy()
```

##### `resetDefaultRouteSettings` <a name="resetDefaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetDefaultRouteSettings"></a>

```java
public void resetDefaultRouteSettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRouteSettings` <a name="resetRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetRouteSettings"></a>

```java
public void resetRouteSettings()
```

##### `resetStageVariables` <a name="resetStageVariables" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.resetStageVariables"></a>

```java
public void resetStageVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings">defaultRouteSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings">routeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeployInput">autoDeployInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettingsInput">defaultRouteSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettingsInput">routeSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariablesInput">stageVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy">autoDeploy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables">stageVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettings"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference getAccessLogSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettingsOutputReference</a>

---

##### `defaultRouteSettings`<sup>Required</sup> <a name="defaultRouteSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettings"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference getDefaultRouteSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettingsOutputReference</a>

---

##### `routeSettings`<sup>Required</sup> <a name="routeSettings" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettings"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap getRouteSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap</a>

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.accessLogSettingsInput"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings getAccessLogSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings">Apigatewayv2ApiGatewayManagedOverridesStageAccessLogSettings</a>

---

##### `autoDeployInput`<sup>Optional</sup> <a name="autoDeployInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeployInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeployInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultRouteSettingsInput`<sup>Optional</sup> <a name="defaultRouteSettingsInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.defaultRouteSettingsInput"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings getDefaultRouteSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageDefaultRouteSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `routeSettingsInput`<sup>Optional</sup> <a name="routeSettingsInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.routeSettingsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings> getRouteSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>>

---

##### `stageVariablesInput`<sup>Optional</sup> <a name="stageVariablesInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoDeploy`<sup>Required</sup> <a name="autoDeploy" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.autoDeploy"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `stageVariables`<sup>Required</sup> <a name="stageVariables" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.stageVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStage">Apigatewayv2ApiGatewayManagedOverridesStage</a>

---


### Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap <a name="Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap;

new Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get"></a>

```java
public Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>>

---


### Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference <a name="Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigatewayv2_api_gateway_managed_overrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference;

new Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetDetailedMetricsEnabled">resetDetailedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetailedMetricsEnabled` <a name="resetDetailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```java
public void resetDetailedMetricsEnabled()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailedMetricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled">detailedMetricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detailedMetricsEnabledInput`<sup>Optional</sup> <a name="detailedMetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `detailedMetricsEnabled`<sup>Required</sup> <a name="detailedMetricsEnabled" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDetailedMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayv2ApiGatewayManagedOverrides.Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings">Apigatewayv2ApiGatewayManagedOverridesStageRouteSettings</a>

---



