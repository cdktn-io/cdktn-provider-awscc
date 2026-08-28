# `apigatewayDeployment` Submodule <a name="`apigatewayDeployment` Submodule" id="@cdktn/provider-awscc.apigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDeployment <a name="ApigatewayDeployment" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeployment;

ApigatewayDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restApiId(java.lang.String)
//  .deploymentCanarySettings(ApigatewayDeploymentDeploymentCanarySettings)
//  .description(java.lang.String)
//  .stageDescription(ApigatewayDeploymentStageDescription)
//  .stageName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `deploymentCanarySettings`<sup>Optional</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.deploymentCanarySettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `stageDescription`<sup>Optional</sup> <a name="stageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageDescription"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.stageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings">putDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription">putStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings">resetDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription">resetStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName">resetStageName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentCanarySettings` <a name="putDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings"></a>

```java
public void putDeploymentCanarySettings(ApigatewayDeploymentDeploymentCanarySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `putStageDescription` <a name="putStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription"></a>

```java
public void putStageDescription(ApigatewayDeploymentStageDescription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `resetDeploymentCanarySettings` <a name="resetDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings"></a>

```java
public void resetDeploymentCanarySettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetStageDescription` <a name="resetStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription"></a>

```java
public void resetStageDescription()
```

##### `resetStageName` <a name="resetStageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName"></a>

```java
public void resetStageName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeployment;

ApigatewayDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeployment;

ApigatewayDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeployment;

ApigatewayDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeployment;

ApigatewayDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput">deploymentCanarySettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput">stageDescriptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentCanarySettings`<sup>Required</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings"></a>

```java
public ApigatewayDeploymentDeploymentCanarySettingsOutputReference getDeploymentCanarySettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stageDescription`<sup>Required</sup> <a name="stageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription"></a>

```java
public ApigatewayDeploymentStageDescriptionOutputReference getStageDescription();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `deploymentCanarySettingsInput`<sup>Optional</sup> <a name="deploymentCanarySettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput"></a>

```java
public IResolvable|ApigatewayDeploymentDeploymentCanarySettings getDeploymentCanarySettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageDescriptionInput`<sup>Optional</sup> <a name="stageDescriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescription getStageDescriptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDeploymentConfig <a name="ApigatewayDeploymentConfig" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentConfig;

ApigatewayDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .restApiId(java.lang.String)
//  .deploymentCanarySettings(ApigatewayDeploymentDeploymentCanarySettings)
//  .description(java.lang.String)
//  .stageDescription(ApigatewayDeploymentStageDescription)
//  .stageName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings">deploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription">stageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `deploymentCanarySettings`<sup>Optional</sup> <a name="deploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings"></a>

```java
public ApigatewayDeploymentDeploymentCanarySettings getDeploymentCanarySettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `stageDescription`<sup>Optional</sup> <a name="stageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription"></a>

```java
public ApigatewayDeploymentStageDescription getStageDescription();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

### ApigatewayDeploymentDeploymentCanarySettings <a name="ApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentDeploymentCanarySettings;

ApigatewayDeploymentDeploymentCanarySettings.builder()
//  .percentTraffic(java.lang.Number)
//  .stageVariableOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .useStageCache(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescription <a name="ApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescription;

ApigatewayDeploymentStageDescription.builder()
//  .accessLogSetting(ApigatewayDeploymentStageDescriptionAccessLogSetting)
//  .cacheClusterEnabled(java.lang.Boolean|IResolvable)
//  .cacheClusterSize(java.lang.String)
//  .cacheDataEncrypted(java.lang.Boolean|IResolvable)
//  .cacheTtlInSeconds(java.lang.Number)
//  .cachingEnabled(java.lang.Boolean|IResolvable)
//  .canarySetting(ApigatewayDeploymentStageDescriptionCanarySetting)
//  .clientCertificateId(java.lang.String)
//  .dataTraceEnabled(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .documentationVersion(java.lang.String)
//  .loggingLevel(java.lang.String)
//  .methodSettings(IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionMethodSettings>)
//  .metricsEnabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionTags>)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
//  .tracingEnabled(java.lang.Boolean|IResolvable)
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | Specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize">cacheClusterSize</a></code> | <code>java.lang.String</code> | The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the cached responses are encrypted. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether responses are cached and returned for requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | Specifies settings for the canary deployment in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether data trace logging is enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description">description</a></code> | <code>java.lang.String</code> | A description of the purpose of the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion">documentationVersion</a></code> | <code>java.lang.String</code> | The version identifier of the API documentation snapshot. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | The logging level for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings">methodSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>></code> | Configures settings for all of the stage's methods. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>></code> | An array of arbitrary tags (key-value pairs) to associate with the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | The target request burst rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | The target request steady-state rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled">tracingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether active tracing with X-ray is enabled for this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map that defines the stage variables. |

---

##### `accessLogSetting`<sup>Optional</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting"></a>

```java
public ApigatewayDeploymentStageDescriptionAccessLogSetting getAccessLogSetting();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

Specifies settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#access_log_setting ApigatewayDeployment#access_log_setting}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCacheClusterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize"></a>

```java
public java.lang.String getCacheClusterSize();
```

- *Type:* java.lang.String

The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_cluster_size ApigatewayDeployment#cache_cluster_size}

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the cached responses are encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether responses are cached and returned for requests.

You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}

---

##### `canarySetting`<sup>Optional</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting"></a>

```java
public ApigatewayDeploymentStageDescriptionCanarySetting getCanarySetting();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

Specifies settings for the canary deployment in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#canary_setting ApigatewayDeployment#canary_setting}

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#client_certificate_id ApigatewayDeployment#client_certificate_id}

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether data trace logging is enabled for methods in the stage.

API Gateway pushes these logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the purpose of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion"></a>

```java
public java.lang.String getDocumentationVersion();
```

- *Type:* java.lang.String

The version identifier of the API documentation snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#documentation_version ApigatewayDeployment#documentation_version}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

The logging level for this method.

For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}

---

##### `methodSettings`<sup>Optional</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionMethodSettings> getMethodSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>>

Configures settings for all of the stage's methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#method_settings ApigatewayDeployment#method_settings}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>>

An array of arbitrary tags (key-value pairs) to associate with the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#tags ApigatewayDeployment#tags}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

The target request burst rate limit.

This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

The target request steady-state rate limit.

For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}

---

##### `tracingEnabled`<sup>Optional</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTracingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether active tracing with X-ray is enabled for this stage.

For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#tracing_enabled ApigatewayDeployment#tracing_enabled}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map that defines the stage variables.

Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#variables ApigatewayDeployment#variables}

---

### ApigatewayDeploymentStageDescriptionAccessLogSetting <a name="ApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionAccessLogSetting;

ApigatewayDeploymentStageDescriptionAccessLogSetting.builder()
//  .destinationArn(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}.

---

### ApigatewayDeploymentStageDescriptionCanarySetting <a name="ApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionCanarySetting;

ApigatewayDeploymentStageDescriptionCanarySetting.builder()
//  .percentTraffic(java.lang.Number)
//  .stageVariableOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .useStageCache(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescriptionMethodSettings <a name="ApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionMethodSettings;

ApigatewayDeploymentStageDescriptionMethodSettings.builder()
//  .cacheDataEncrypted(java.lang.Boolean|IResolvable)
//  .cacheTtlInSeconds(java.lang.Number)
//  .cachingEnabled(java.lang.Boolean|IResolvable)
//  .dataTraceEnabled(java.lang.Boolean|IResolvable)
//  .httpMethod(java.lang.String)
//  .loggingLevel(java.lang.String)
//  .metricsEnabled(java.lang.Boolean|IResolvable)
//  .resourcePath(java.lang.String)
//  .throttlingBurstLimit(java.lang.Number)
//  .throttlingRateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}. |

---

##### `cacheDataEncrypted`<sup>Optional</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}.

---

##### `cacheTtlInSeconds`<sup>Optional</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}.

---

##### `cachingEnabled`<sup>Optional</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}.

---

##### `dataTraceEnabled`<sup>Optional</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

The HTTP method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#http_method ApigatewayDeployment#http_method}

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}.

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

The resource path for this method.

Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#resource_path ApigatewayDeployment#resource_path}

---

##### `throttlingBurstLimit`<sup>Optional</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}.

---

##### `throttlingRateLimit`<sup>Optional</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}.

---

### ApigatewayDeploymentStageDescriptionTags <a name="ApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionTags;

ApigatewayDeploymentStageDescriptionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key">key</a></code> | <code>java.lang.String</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the specified tag key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_deployment#value ApigatewayDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="ApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference;

new ApigatewayDeploymentDeploymentCanarySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```java
public void resetPercentTraffic()
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```java
public void resetStageVariableOverrides()
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```java
public void resetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```java
public java.lang.Number getPercentTrafficInput();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCacheInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentDeploymentCanarySettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---


### ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference;

new ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionAccessLogSetting getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### ApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="ApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference;

new ApigatewayDeploymentStageDescriptionCanarySettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic"></a>

```java
public void resetPercentTraffic()
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides"></a>

```java
public void resetStageVariableOverrides()
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache"></a>

```java
public void resetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput"></a>

```java
public java.lang.Number getPercentTrafficInput();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCacheInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```java
public java.lang.Boolean|IResolvable getUseStageCache();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionCanarySetting getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### ApigatewayDeploymentStageDescriptionMethodSettingsList <a name="ApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionMethodSettingsList;

new ApigatewayDeploymentStageDescriptionMethodSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```java
public ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionMethodSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>>

---


### ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference;

new ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```java
public void resetCacheDataEncrypted()
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```java
public void resetCacheTtlInSeconds()
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled"></a>

```java
public void resetCachingEnabled()
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```java
public void resetDataTraceEnabled()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath"></a>

```java
public void resetResourcePath()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```java
public java.lang.Number getCacheTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput"></a>

```java
public java.lang.String getResourcePathInput();
```

- *Type:* java.lang.String

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### ApigatewayDeploymentStageDescriptionOutputReference <a name="ApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionOutputReference;

new ApigatewayDeploymentStageDescriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting">putAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting">putCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings">putMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting">resetAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted">resetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds">resetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled">resetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting">resetCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled">resetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings">resetMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit">resetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit">resetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled">resetTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessLogSetting` <a name="putAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting"></a>

```java
public void putAccessLogSetting(ApigatewayDeploymentStageDescriptionAccessLogSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `putCanarySetting` <a name="putCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting"></a>

```java
public void putCanarySetting(ApigatewayDeploymentStageDescriptionCanarySetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `putMethodSettings` <a name="putMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings"></a>

```java
public void putMethodSettings(IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionMethodSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>>

---

##### `resetAccessLogSetting` <a name="resetAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting"></a>

```java
public void resetAccessLogSetting()
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled"></a>

```java
public void resetCacheClusterEnabled()
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize"></a>

```java
public void resetCacheClusterSize()
```

##### `resetCacheDataEncrypted` <a name="resetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted"></a>

```java
public void resetCacheDataEncrypted()
```

##### `resetCacheTtlInSeconds` <a name="resetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds"></a>

```java
public void resetCacheTtlInSeconds()
```

##### `resetCachingEnabled` <a name="resetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled"></a>

```java
public void resetCachingEnabled()
```

##### `resetCanarySetting` <a name="resetCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting"></a>

```java
public void resetCanarySetting()
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId"></a>

```java
public void resetClientCertificateId()
```

##### `resetDataTraceEnabled` <a name="resetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled"></a>

```java
public void resetDataTraceEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion"></a>

```java
public void resetDocumentationVersion()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetMethodSettings` <a name="resetMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings"></a>

```java
public void resetMethodSettings()
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetThrottlingBurstLimit` <a name="resetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit"></a>

```java
public void resetThrottlingBurstLimit()
```

##### `resetThrottlingRateLimit` <a name="resetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit"></a>

```java
public void resetThrottlingRateLimit()
```

##### `resetTracingEnabled` <a name="resetTracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled"></a>

```java
public void resetTracingEnabled()
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables"></a>

```java
public void resetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">accessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">canarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">methodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput">accessLogSettingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput">cacheDataEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput">cacheTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput">cachingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput">canarySettingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput">dataTraceEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput">documentationVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput">methodSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput">throttlingBurstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput">throttlingRateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput">tracingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput">variablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">cacheClusterSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">cacheDataEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">cacheTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">cachingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">dataTraceEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">documentationVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">throttlingBurstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">throttlingRateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">tracingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLogSetting`<sup>Required</sup> <a name="accessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```java
public ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference getAccessLogSetting();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `canarySetting`<sup>Required</sup> <a name="canarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```java
public ApigatewayDeploymentStageDescriptionCanarySettingOutputReference getCanarySetting();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `methodSettings`<sup>Required</sup> <a name="methodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```java
public ApigatewayDeploymentStageDescriptionMethodSettingsList getMethodSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```java
public ApigatewayDeploymentStageDescriptionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `accessLogSettingInput`<sup>Optional</sup> <a name="accessLogSettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionAccessLogSetting getAccessLogSettingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCacheClusterEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput"></a>

```java
public java.lang.String getCacheClusterSizeInput();
```

- *Type:* java.lang.String

---

##### `cacheDataEncryptedInput`<sup>Optional</sup> <a name="cacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtlInSecondsInput`<sup>Optional</sup> <a name="cacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput"></a>

```java
public java.lang.Number getCacheTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `cachingEnabledInput`<sup>Optional</sup> <a name="cachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `canarySettingInput`<sup>Optional</sup> <a name="canarySettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionCanarySetting getCanarySettingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput"></a>

```java
public java.lang.String getClientCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `dataTraceEnabledInput`<sup>Optional</sup> <a name="dataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput"></a>

```java
public java.lang.String getDocumentationVersionInput();
```

- *Type:* java.lang.String

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `methodSettingsInput`<sup>Optional</sup> <a name="methodSettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionMethodSettings> getMethodSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>>

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>>

---

##### `throttlingBurstLimitInput`<sup>Optional</sup> <a name="throttlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput"></a>

```java
public java.lang.Number getThrottlingBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimitInput`<sup>Optional</sup> <a name="throttlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput"></a>

```java
public java.lang.Number getThrottlingRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `tracingEnabledInput`<sup>Optional</sup> <a name="tracingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTracingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCacheClusterEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```java
public java.lang.String getCacheClusterSize();
```

- *Type:* java.lang.String

---

##### `cacheDataEncrypted`<sup>Required</sup> <a name="cacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getCacheDataEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtlInSeconds`<sup>Required</sup> <a name="cacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```java
public java.lang.Number getCacheTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `cachingEnabled`<sup>Required</sup> <a name="cachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCachingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

---

##### `dataTraceEnabled`<sup>Required</sup> <a name="dataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTraceEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```java
public java.lang.String getDocumentationVersion();
```

- *Type:* java.lang.String

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `throttlingBurstLimit`<sup>Required</sup> <a name="throttlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```java
public java.lang.Number getThrottlingBurstLimit();
```

- *Type:* java.lang.Number

---

##### `throttlingRateLimit`<sup>Required</sup> <a name="throttlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```java
public java.lang.Number getThrottlingRateLimit();
```

- *Type:* java.lang.Number

---

##### `tracingEnabled`<sup>Required</sup> <a name="tracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTracingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescription getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---


### ApigatewayDeploymentStageDescriptionTagsList <a name="ApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionTagsList;

new ApigatewayDeploymentStageDescriptionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get"></a>

```java
public ApigatewayDeploymentStageDescriptionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayDeploymentStageDescriptionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>>

---


### ApigatewayDeploymentStageDescriptionTagsOutputReference <a name="ApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_deployment.ApigatewayDeploymentStageDescriptionTagsOutputReference;

new ApigatewayDeploymentStageDescriptionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDeploymentStageDescriptionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>

---



