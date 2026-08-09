# `codedeployDeploymentConfig` Submodule <a name="`codedeployDeploymentConfig` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentConfig <a name="CodedeployDeploymentConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .computePlatform(java.lang.String)
//  .deploymentConfigName(java.lang.String)
//  .minimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts)
//  .trafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig)
//  .zonalConfig(CodedeployDeploymentConfigZonalConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | The destination platform type for the deployment (Lambda, Server, or ECS). |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | A name for the deployment configuration. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | The minimum number of healthy instances that should be available at any time during the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | The configuration that specifies how the deployment traffic is routed. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.zonalConfig">zonalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | The zonal deployment config that specifies how the zonal deployment behaves. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform"></a>

- *Type:* java.lang.String

The destination platform type for the deployment (Lambda, Server, or ECS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName"></a>

- *Type:* java.lang.String

A name for the deployment configuration.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="minimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

The minimum number of healthy instances that should be available at any time during the deployment.

There are two parameters expected in the input: type and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

The configuration that specifies how the deployment traffic is routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

##### `zonalConfig`<sup>Optional</sup> <a name="zonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.zonalConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

The zonal deployment config that specifies how the zonal deployment behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts">putMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig">putTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig">putZonalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform">resetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetDeploymentConfigName">resetDeploymentConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts">resetMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig">resetTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig">resetZonalConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMinimumHealthyHosts` <a name="putMinimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts"></a>

```java
public void putMinimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `putTrafficRoutingConfig` <a name="putTrafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig"></a>

```java
public void putTrafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `putZonalConfig` <a name="putZonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig"></a>

```java
public void putZonalConfig(CodedeployDeploymentConfigZonalConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---

##### `resetComputePlatform` <a name="resetComputePlatform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform"></a>

```java
public void resetComputePlatform()
```

##### `resetDeploymentConfigName` <a name="resetDeploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetDeploymentConfigName"></a>

```java
public void resetDeploymentConfigName()
```

##### `resetMinimumHealthyHosts` <a name="resetMinimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts"></a>

```java
public void resetMinimumHealthyHosts()
```

##### `resetTrafficRoutingConfig` <a name="resetTrafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig"></a>

```java
public void resetTrafficRoutingConfig()
```

##### `resetZonalConfig` <a name="resetZonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig"></a>

```java
public void resetZonalConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfig;

CodedeployDeploymentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodedeployDeploymentConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodedeployDeploymentConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig">zonalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput">computePlatformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput">deploymentConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput">minimumHealthyHostsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput">trafficRoutingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput">zonalConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHosts`<sup>Required</sup> <a name="minimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHostsOutputReference getMinimumHealthyHosts();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `trafficRoutingConfig`<sup>Required</sup> <a name="trafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigOutputReference getTrafficRoutingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `zonalConfig`<sup>Required</sup> <a name="zonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig"></a>

```java
public CodedeployDeploymentConfigZonalConfigOutputReference getZonalConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `computePlatformInput`<sup>Optional</sup> <a name="computePlatformInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput"></a>

```java
public java.lang.String getComputePlatformInput();
```

- *Type:* java.lang.String

---

##### `deploymentConfigNameInput`<sup>Optional</sup> <a name="deploymentConfigNameInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput"></a>

```java
public java.lang.String getDeploymentConfigNameInput();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHostsInput`<sup>Optional</sup> <a name="minimumHealthyHostsInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigMinimumHealthyHosts getMinimumHealthyHostsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `trafficRoutingConfigInput`<sup>Optional</sup> <a name="trafficRoutingConfigInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfig getTrafficRoutingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `zonalConfigInput`<sup>Optional</sup> <a name="zonalConfigInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigZonalConfig getZonalConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---

##### `computePlatform`<sup>Required</sup> <a name="computePlatform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

---

##### `deploymentConfigName`<sup>Required</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentConfigConfig <a name="CodedeployDeploymentConfigConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigConfig;

CodedeployDeploymentConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .computePlatform(java.lang.String)
//  .deploymentConfigName(java.lang.String)
//  .minimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts)
//  .trafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig)
//  .zonalConfig(CodedeployDeploymentConfigZonalConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform">computePlatform</a></code> | <code>java.lang.String</code> | The destination platform type for the deployment (Lambda, Server, or ECS). |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName">deploymentConfigName</a></code> | <code>java.lang.String</code> | A name for the deployment configuration. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts">minimumHealthyHosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | The minimum number of healthy instances that should be available at any time during the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig">trafficRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | The configuration that specifies how the deployment traffic is routed. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig">zonalConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | The zonal deployment config that specifies how the zonal deployment behaves. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `computePlatform`<sup>Optional</sup> <a name="computePlatform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform"></a>

```java
public java.lang.String getComputePlatform();
```

- *Type:* java.lang.String

The destination platform type for the deployment (Lambda, Server, or ECS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}

---

##### `deploymentConfigName`<sup>Optional</sup> <a name="deploymentConfigName" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName"></a>

```java
public java.lang.String getDeploymentConfigName();
```

- *Type:* java.lang.String

A name for the deployment configuration.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}

---

##### `minimumHealthyHosts`<sup>Optional</sup> <a name="minimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts"></a>

```java
public CodedeployDeploymentConfigMinimumHealthyHosts getMinimumHealthyHosts();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

The minimum number of healthy instances that should be available at any time during the deployment.

There are two parameters expected in the input: type and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `trafficRoutingConfig`<sup>Optional</sup> <a name="trafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfig getTrafficRoutingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

The configuration that specifies how the deployment traffic is routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

##### `zonalConfig`<sup>Optional</sup> <a name="zonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig"></a>

```java
public CodedeployDeploymentConfigZonalConfig getZonalConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

The zonal deployment config that specifies how the zonal deployment behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}

---

### CodedeployDeploymentConfigMinimumHealthyHosts <a name="CodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigMinimumHealthyHosts;

CodedeployDeploymentConfigMinimumHealthyHosts.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

### CodedeployDeploymentConfigTrafficRoutingConfig <a name="CodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfig;

CodedeployDeploymentConfigTrafficRoutingConfig.builder()
//  .timeBasedCanary(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary)
//  .timeBasedLinear(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |

---

##### `timeBasedCanary`<sup>Optional</sup> <a name="timeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getTimeBasedCanary();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}.

---

##### `timeBasedLinear`<sup>Optional</sup> <a name="timeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getTimeBasedLinear();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;

CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.builder()
//  .canaryInterval(java.lang.Number)
//  .canaryPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryInterval">canaryInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryPercentage">canaryPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}. |

---

##### `canaryInterval`<sup>Optional</sup> <a name="canaryInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryInterval"></a>

```java
public java.lang.Number getCanaryInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}.

---

##### `canaryPercentage`<sup>Optional</sup> <a name="canaryPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryPercentage"></a>

```java
public java.lang.Number getCanaryPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;

CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.builder()
//  .linearInterval(java.lang.Number)
//  .linearPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearInterval">linearInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearPercentage">linearPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}. |

---

##### `linearInterval`<sup>Optional</sup> <a name="linearInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearInterval"></a>

```java
public java.lang.Number getLinearInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}.

---

##### `linearPercentage`<sup>Optional</sup> <a name="linearPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearPercentage"></a>

```java
public java.lang.Number getLinearPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}.

---

### CodedeployDeploymentConfigZonalConfig <a name="CodedeployDeploymentConfigZonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigZonalConfig;

CodedeployDeploymentConfigZonalConfig.builder()
//  .firstZoneMonitorDurationInSeconds(java.lang.Number)
//  .minimumHealthyHostsPerZone(CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone)
//  .monitorDurationInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds">firstZoneMonitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone">minimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds">monitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}. |

---

##### `firstZoneMonitorDurationInSeconds`<sup>Optional</sup> <a name="firstZoneMonitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds"></a>

```java
public java.lang.Number getFirstZoneMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}.

---

##### `minimumHealthyHostsPerZone`<sup>Optional</sup> <a name="minimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone"></a>

```java
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone getMinimumHealthyHostsPerZone();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}.

---

##### `monitorDurationInSeconds`<sup>Optional</sup> <a name="monitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds"></a>

```java
public java.lang.Number getMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}.

---

### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone;

CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="CodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;

new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigMinimumHealthyHosts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary">putTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear">putTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary">resetTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear">resetTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeBasedCanary` <a name="putTimeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary"></a>

```java
public void putTimeBasedCanary(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `putTimeBasedLinear` <a name="putTimeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear"></a>

```java
public void putTimeBasedLinear(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `resetTimeBasedCanary` <a name="resetTimeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary"></a>

```java
public void resetTimeBasedCanary()
```

##### `resetTimeBasedLinear` <a name="resetTimeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear"></a>

```java
public void resetTimeBasedLinear()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">timeBasedCanary</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">timeBasedLinear</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput">timeBasedCanaryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput">timeBasedLinearInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBasedCanary`<sup>Required</sup> <a name="timeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference getTimeBasedCanary();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `timeBasedLinear`<sup>Required</sup> <a name="timeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```java
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference getTimeBasedLinear();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `timeBasedCanaryInput`<sup>Optional</sup> <a name="timeBasedCanaryInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getTimeBasedCanaryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `timeBasedLinearInput`<sup>Optional</sup> <a name="timeBasedLinearInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getTimeBasedLinearInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryInterval">resetCanaryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryPercentage">resetCanaryPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanaryInterval` <a name="resetCanaryInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryInterval"></a>

```java
public void resetCanaryInterval()
```

##### `resetCanaryPercentage` <a name="resetCanaryPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryPercentage"></a>

```java
public void resetCanaryPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryIntervalInput">canaryIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentageInput">canaryPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval">canaryInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage">canaryPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canaryIntervalInput`<sup>Optional</sup> <a name="canaryIntervalInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryIntervalInput"></a>

```java
public java.lang.Number getCanaryIntervalInput();
```

- *Type:* java.lang.Number

---

##### `canaryPercentageInput`<sup>Optional</sup> <a name="canaryPercentageInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentageInput"></a>

```java
public java.lang.Number getCanaryPercentageInput();
```

- *Type:* java.lang.Number

---

##### `canaryInterval`<sup>Required</sup> <a name="canaryInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval"></a>

```java
public java.lang.Number getCanaryInterval();
```

- *Type:* java.lang.Number

---

##### `canaryPercentage`<sup>Required</sup> <a name="canaryPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage"></a>

```java
public java.lang.Number getCanaryPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearInterval">resetLinearInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearPercentage">resetLinearPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLinearInterval` <a name="resetLinearInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearInterval"></a>

```java
public void resetLinearInterval()
```

##### `resetLinearPercentage` <a name="resetLinearPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearPercentage"></a>

```java
public void resetLinearPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearIntervalInput">linearIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentageInput">linearPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval">linearInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage">linearPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linearIntervalInput`<sup>Optional</sup> <a name="linearIntervalInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearIntervalInput"></a>

```java
public java.lang.Number getLinearIntervalInput();
```

- *Type:* java.lang.Number

---

##### `linearPercentageInput`<sup>Optional</sup> <a name="linearPercentageInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentageInput"></a>

```java
public java.lang.Number getLinearPercentageInput();
```

- *Type:* java.lang.Number

---

##### `linearInterval`<sup>Required</sup> <a name="linearInterval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval"></a>

```java
public java.lang.Number getLinearInterval();
```

- *Type:* java.lang.Number

---

##### `linearPercentage`<sup>Required</sup> <a name="linearPercentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage"></a>

```java
public java.lang.Number getLinearPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference;

new CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### CodedeployDeploymentConfigZonalConfigOutputReference <a name="CodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.codedeploy_deployment_config.CodedeployDeploymentConfigZonalConfigOutputReference;

new CodedeployDeploymentConfigZonalConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone">putMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds">resetFirstZoneMonitorDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone">resetMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds">resetMonitorDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMinimumHealthyHostsPerZone` <a name="putMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone"></a>

```java
public void putMinimumHealthyHostsPerZone(CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---

##### `resetFirstZoneMonitorDurationInSeconds` <a name="resetFirstZoneMonitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds"></a>

```java
public void resetFirstZoneMonitorDurationInSeconds()
```

##### `resetMinimumHealthyHostsPerZone` <a name="resetMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone"></a>

```java
public void resetMinimumHealthyHostsPerZone()
```

##### `resetMonitorDurationInSeconds` <a name="resetMonitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds"></a>

```java
public void resetMonitorDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">minimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput">firstZoneMonitorDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput">minimumHealthyHostsPerZoneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput">monitorDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">firstZoneMonitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">monitorDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumHealthyHostsPerZone`<sup>Required</sup> <a name="minimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```java
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference getMinimumHealthyHostsPerZone();
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `firstZoneMonitorDurationInSecondsInput`<sup>Optional</sup> <a name="firstZoneMonitorDurationInSecondsInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput"></a>

```java
public java.lang.Number getFirstZoneMonitorDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `minimumHealthyHostsPerZoneInput`<sup>Optional</sup> <a name="minimumHealthyHostsPerZoneInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput"></a>

```java
public IResolvable|CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone getMinimumHealthyHostsPerZoneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---

##### `monitorDurationInSecondsInput`<sup>Optional</sup> <a name="monitorDurationInSecondsInput" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput"></a>

```java
public java.lang.Number getMonitorDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `firstZoneMonitorDurationInSeconds`<sup>Required</sup> <a name="firstZoneMonitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```java
public java.lang.Number getFirstZoneMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `monitorDurationInSeconds`<sup>Required</sup> <a name="monitorDurationInSeconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```java
public java.lang.Number getMonitorDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CodedeployDeploymentConfigZonalConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---



