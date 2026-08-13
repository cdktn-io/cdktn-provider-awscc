# `sagemakerEndpoint` Submodule <a name="`sagemakerEndpoint` Submodule" id="@cdktn/provider-awscc.sagemakerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpoint <a name="SagemakerEndpoint" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint awscc_sagemaker_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpoint;

SagemakerEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointConfigName(java.lang.String)
//  .deploymentConfig(SagemakerEndpointDeploymentConfig)
//  .excludeRetainedVariantProperties(IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties>)
//  .retainAllVariantProperties(java.lang.Boolean|IResolvable)
//  .retainDeploymentConfig(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SagemakerEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.endpointConfigName">endpointConfigName</a></code> | <code>java.lang.String</code> | The name of the endpoint configuration for the SageMaker endpoint. This is a required property. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.excludeRetainedVariantProperties">excludeRetainedVariantProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>></code> | Specifies a list of variant properties that you want to exclude when updating an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.retainAllVariantProperties">retainAllVariantProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, retains all variant properties for an endpoint when it is updated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.retainDeploymentConfig">retainDeploymentConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, retains the deployment configuration during endpoint updates. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.endpointConfigName"></a>

- *Type:* java.lang.String

The name of the endpoint configuration for the SageMaker endpoint. This is a required property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.deploymentConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#deployment_config SagemakerEndpoint#deployment_config}

---

##### `excludeRetainedVariantProperties`<sup>Optional</sup> <a name="excludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.excludeRetainedVariantProperties"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>>

Specifies a list of variant properties that you want to exclude when updating an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#exclude_retained_variant_properties SagemakerEndpoint#exclude_retained_variant_properties}

---

##### `retainAllVariantProperties`<sup>Optional</sup> <a name="retainAllVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.retainAllVariantProperties"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, retains all variant properties for an endpoint when it is updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#retain_all_variant_properties SagemakerEndpoint#retain_all_variant_properties}

---

##### `retainDeploymentConfig`<sup>Optional</sup> <a name="retainDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.retainDeploymentConfig"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, retains the deployment configuration during endpoint updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#retain_deployment_config SagemakerEndpoint#retain_deployment_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#tags SagemakerEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig">putDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putExcludeRetainedVariantProperties">putExcludeRetainedVariantProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetDeploymentConfig">resetDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetExcludeRetainedVariantProperties">resetExcludeRetainedVariantProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetRetainAllVariantProperties">resetRetainAllVariantProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetRetainDeploymentConfig">resetRetainDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentConfig` <a name="putDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig"></a>

```java
public void putDeploymentConfig(SagemakerEndpointDeploymentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putDeploymentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---

##### `putExcludeRetainedVariantProperties` <a name="putExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putExcludeRetainedVariantProperties"></a>

```java
public void putExcludeRetainedVariantProperties(IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putExcludeRetainedVariantProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SagemakerEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>>

---

##### `resetDeploymentConfig` <a name="resetDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetDeploymentConfig"></a>

```java
public void resetDeploymentConfig()
```

##### `resetExcludeRetainedVariantProperties` <a name="resetExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetExcludeRetainedVariantProperties"></a>

```java
public void resetExcludeRetainedVariantProperties()
```

##### `resetRetainAllVariantProperties` <a name="resetRetainAllVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetRetainAllVariantProperties"></a>

```java
public void resetRetainAllVariantProperties()
```

##### `resetRetainDeploymentConfig` <a name="resetRetainDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetRetainDeploymentConfig"></a>

```java
public void resetRetainDeploymentConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpoint;

SagemakerEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpoint;

SagemakerEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpoint;

SagemakerEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpoint;

SagemakerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SagemakerEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SagemakerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SagemakerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SagemakerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference">SagemakerEndpointDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointArn">endpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.excludeRetainedVariantProperties">excludeRetainedVariantProperties</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList">SagemakerEndpointExcludeRetainedVariantPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList">SagemakerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfigInput">deploymentConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigNameInput">endpointConfigNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.excludeRetainedVariantPropertiesInput">excludeRetainedVariantPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainAllVariantPropertiesInput">retainAllVariantPropertiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainDeploymentConfigInput">retainDeploymentConfigInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigName">endpointConfigName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainAllVariantProperties">retainAllVariantProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainDeploymentConfig">retainDeploymentConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentConfig`<sup>Required</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfig"></a>

```java
public SagemakerEndpointDeploymentConfigOutputReference getDeploymentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference">SagemakerEndpointDeploymentConfigOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointArn"></a>

```java
public java.lang.String getEndpointArn();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `excludeRetainedVariantProperties`<sup>Required</sup> <a name="excludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.excludeRetainedVariantProperties"></a>

```java
public SagemakerEndpointExcludeRetainedVariantPropertiesList getExcludeRetainedVariantProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList">SagemakerEndpointExcludeRetainedVariantPropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tags"></a>

```java
public SagemakerEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList">SagemakerEndpointTagsList</a>

---

##### `deploymentConfigInput`<sup>Optional</sup> <a name="deploymentConfigInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.deploymentConfigInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfig getDeploymentConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---

##### `endpointConfigNameInput`<sup>Optional</sup> <a name="endpointConfigNameInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigNameInput"></a>

```java
public java.lang.String getEndpointConfigNameInput();
```

- *Type:* java.lang.String

---

##### `excludeRetainedVariantPropertiesInput`<sup>Optional</sup> <a name="excludeRetainedVariantPropertiesInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.excludeRetainedVariantPropertiesInput"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties> getExcludeRetainedVariantPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>>

---

##### `retainAllVariantPropertiesInput`<sup>Optional</sup> <a name="retainAllVariantPropertiesInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainAllVariantPropertiesInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainAllVariantPropertiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainDeploymentConfigInput`<sup>Optional</sup> <a name="retainDeploymentConfigInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainDeploymentConfigInput"></a>

```java
public java.lang.Boolean|IResolvable getRetainDeploymentConfigInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>>

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.endpointConfigName"></a>

```java
public java.lang.String getEndpointConfigName();
```

- *Type:* java.lang.String

---

##### `retainAllVariantProperties`<sup>Required</sup> <a name="retainAllVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainAllVariantProperties"></a>

```java
public java.lang.Boolean|IResolvable getRetainAllVariantProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retainDeploymentConfig`<sup>Required</sup> <a name="retainDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.retainDeploymentConfig"></a>

```java
public java.lang.Boolean|IResolvable getRetainDeploymentConfig();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfig <a name="SagemakerEndpointConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointConfig;

SagemakerEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointConfigName(java.lang.String)
//  .deploymentConfig(SagemakerEndpointDeploymentConfig)
//  .excludeRetainedVariantProperties(IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties>)
//  .retainAllVariantProperties(java.lang.Boolean|IResolvable)
//  .retainDeploymentConfig(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<SagemakerEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.endpointConfigName">endpointConfigName</a></code> | <code>java.lang.String</code> | The name of the endpoint configuration for the SageMaker endpoint. This is a required property. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.deploymentConfig">deploymentConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.excludeRetainedVariantProperties">excludeRetainedVariantProperties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>></code> | Specifies a list of variant properties that you want to exclude when updating an endpoint. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.retainAllVariantProperties">retainAllVariantProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, retains all variant properties for an endpoint when it is updated. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.retainDeploymentConfig">retainDeploymentConfig</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When set to true, retains the deployment configuration during endpoint updates. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointConfigName`<sup>Required</sup> <a name="endpointConfigName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.endpointConfigName"></a>

```java
public java.lang.String getEndpointConfigName();
```

- *Type:* java.lang.String

The name of the endpoint configuration for the SageMaker endpoint. This is a required property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}

---

##### `deploymentConfig`<sup>Optional</sup> <a name="deploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.deploymentConfig"></a>

```java
public SagemakerEndpointDeploymentConfig getDeploymentConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

Specifies deployment configuration for updating the SageMaker endpoint. Includes rollback and update policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#deployment_config SagemakerEndpoint#deployment_config}

---

##### `excludeRetainedVariantProperties`<sup>Optional</sup> <a name="excludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.excludeRetainedVariantProperties"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties> getExcludeRetainedVariantProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>>

Specifies a list of variant properties that you want to exclude when updating an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#exclude_retained_variant_properties SagemakerEndpoint#exclude_retained_variant_properties}

---

##### `retainAllVariantProperties`<sup>Optional</sup> <a name="retainAllVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.retainAllVariantProperties"></a>

```java
public java.lang.Boolean|IResolvable getRetainAllVariantProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, retains all variant properties for an endpoint when it is updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#retain_all_variant_properties SagemakerEndpoint#retain_all_variant_properties}

---

##### `retainDeploymentConfig`<sup>Optional</sup> <a name="retainDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.retainDeploymentConfig"></a>

```java
public java.lang.Boolean|IResolvable getRetainDeploymentConfig();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When set to true, retains the deployment configuration during endpoint updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#retain_deployment_config SagemakerEndpoint#retain_deployment_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#tags SagemakerEndpoint#tags}

---

### SagemakerEndpointDeploymentConfig <a name="SagemakerEndpointDeploymentConfig" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfig;

SagemakerEndpointDeploymentConfig.builder()
//  .autoRollbackConfiguration(SagemakerEndpointDeploymentConfigAutoRollbackConfiguration)
//  .blueGreenUpdatePolicy(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy)
//  .rollingUpdatePolicy(SagemakerEndpointDeploymentConfigRollingUpdatePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | Configuration for automatic rollback if an error occurs during deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.blueGreenUpdatePolicy">blueGreenUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | Configuration for blue-green update deployment policies. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | Configuration for rolling update deployment policies. |

---

##### `autoRollbackConfiguration`<sup>Optional</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.autoRollbackConfiguration"></a>

```java
public SagemakerEndpointDeploymentConfigAutoRollbackConfiguration getAutoRollbackConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

Configuration for automatic rollback if an error occurs during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}

---

##### `blueGreenUpdatePolicy`<sup>Optional</sup> <a name="blueGreenUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.blueGreenUpdatePolicy"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy getBlueGreenUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

Configuration for blue-green update deployment policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}

---

##### `rollingUpdatePolicy`<sup>Optional</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig.property.rollingUpdatePolicy"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicy getRollingUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

Configuration for rolling update deployment policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#rolling_update_policy SagemakerEndpoint#rolling_update_policy}

---

### SagemakerEndpointDeploymentConfigAutoRollbackConfiguration <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;

SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.builder()
//  .alarms(IResolvable|java.util.List<SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.property.alarms">alarms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>></code> | List of CloudWatch alarms to monitor during the deployment. If any alarm goes off, the deployment is rolled back. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration.property.alarms"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms> getAlarms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>>

List of CloudWatch alarms to monitor during the deployment. If any alarm goes off, the deployment is rolled back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#alarms SagemakerEndpoint#alarms}

---

### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms;

SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.builder()
//  .alarmName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | The name of the CloudWatch alarm. |

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

The name of the CloudWatch alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#alarm_name SagemakerEndpoint#alarm_name}

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;

SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.builder()
//  .maximumExecutionTimeoutInSeconds(java.lang.Number)
//  .terminationWaitInSeconds(java.lang.Number)
//  .trafficRoutingConfiguration(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time allowed for the blue/green update, in seconds. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.terminationWaitInSeconds">terminationWaitInSeconds</a></code> | <code>java.lang.Number</code> | The wait time before terminating the old endpoint during a blue/green deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.trafficRoutingConfiguration">trafficRoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | The traffic routing configuration for the blue/green deployment. |

---

##### `maximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

The maximum time allowed for the blue/green update, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}

---

##### `terminationWaitInSeconds`<sup>Optional</sup> <a name="terminationWaitInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.terminationWaitInSeconds"></a>

```java
public java.lang.Number getTerminationWaitInSeconds();
```

- *Type:* java.lang.Number

The wait time before terminating the old endpoint during a blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}

---

##### `trafficRoutingConfiguration`<sup>Optional</sup> <a name="trafficRoutingConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.property.trafficRoutingConfiguration"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration getTrafficRoutingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

The traffic routing configuration for the blue/green deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;

SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.builder()
//  .canarySize(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize)
//  .linearStepSize(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize)
//  .type(java.lang.String)
//  .waitIntervalInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.canarySize">canarySize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | Specifies the size of the canary traffic in a canary deployment. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.linearStepSize">linearStepSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | Specifies the step size for linear traffic routing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of traffic routing (e.g., 'AllAtOnce', 'Canary', 'Linear'). |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Specifies the wait interval between traffic shifts, in seconds. |

---

##### `canarySize`<sup>Optional</sup> <a name="canarySize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.canarySize"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize getCanarySize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

Specifies the size of the canary traffic in a canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#canary_size SagemakerEndpoint#canary_size}

---

##### `linearStepSize`<sup>Optional</sup> <a name="linearStepSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.linearStepSize"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize getLinearStepSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

Specifies the step size for linear traffic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#linear_step_size SagemakerEndpoint#linear_step_size}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of traffic routing (e.g., 'AllAtOnce', 'Canary', 'Linear').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}

---

##### `waitIntervalInSeconds`<sup>Optional</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

Specifies the wait interval between traffic shifts, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;

SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether the `Value` is an instance count or a capacity unit. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.value">value</a></code> | <code>java.lang.Number</code> | The value representing either the number of instances or the number of capacity units. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether the `Value` is an instance count or a capacity unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value representing either the number of instances or the number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}

---

### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;

SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether the `Value` is an instance count or a capacity unit. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.value">value</a></code> | <code>java.lang.Number</code> | The value representing either the number of instances or the number of capacity units. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether the `Value` is an instance count or a capacity unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value representing either the number of instances or the number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}

---

### SagemakerEndpointDeploymentConfigRollingUpdatePolicy <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy;

SagemakerEndpointDeploymentConfigRollingUpdatePolicy.builder()
//  .maximumBatchSize(SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize)
//  .maximumExecutionTimeoutInSeconds(java.lang.Number)
//  .rollbackMaximumBatchSize(SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize)
//  .waitIntervalInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | Specifies the maximum batch size for each rolling update. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | The maximum time allowed for the rolling update, in seconds. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | The maximum batch size for rollback during an update failure. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | The time to wait between steps during the rolling update, in seconds. |

---

##### `maximumBatchSize`<sup>Optional</sup> <a name="maximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.maximumBatchSize"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize getMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

Specifies the maximum batch size for each rolling update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#maximum_batch_size SagemakerEndpoint#maximum_batch_size}

---

##### `maximumExecutionTimeoutInSeconds`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.maximumExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

The maximum time allowed for the rolling update, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}

---

##### `rollbackMaximumBatchSize`<sup>Optional</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.rollbackMaximumBatchSize"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getRollbackMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

The maximum batch size for rollback during an update failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#rollback_maximum_batch_size SagemakerEndpoint#rollback_maximum_batch_size}

---

##### `waitIntervalInSeconds`<sup>Optional</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

The time to wait between steps during the rolling update, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}

---

### SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize;

SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether the `Value` is an instance count or a capacity unit. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value">value</a></code> | <code>java.lang.Number</code> | The value representing either the number of instances or the number of capacity units. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether the `Value` is an instance count or a capacity unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value representing either the number of instances or the number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}

---

### SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;

SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type">type</a></code> | <code>java.lang.String</code> | Specifies whether the `Value` is an instance count or a capacity unit. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value">value</a></code> | <code>java.lang.Number</code> | The value representing either the number of instances or the number of capacity units. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies whether the `Value` is an instance count or a capacity unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value representing either the number of instances or the number of capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}

---

### SagemakerEndpointExcludeRetainedVariantProperties <a name="SagemakerEndpointExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointExcludeRetainedVariantProperties;

SagemakerEndpointExcludeRetainedVariantProperties.builder()
//  .variantPropertyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties.property.variantPropertyType">variantPropertyType</a></code> | <code>java.lang.String</code> | The type of variant property (e.g., 'DesiredInstanceCount', 'DesiredWeight', 'DataCaptureConfig'). |

---

##### `variantPropertyType`<sup>Optional</sup> <a name="variantPropertyType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties.property.variantPropertyType"></a>

```java
public java.lang.String getVariantPropertyType();
```

- *Type:* java.lang.String

The type of variant property (e.g., 'DesiredInstanceCount', 'DesiredWeight', 'DataCaptureConfig').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#variant_property_type SagemakerEndpoint#variant_property_type}

---

### SagemakerEndpointTags <a name="SagemakerEndpointTags" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointTags;

SagemakerEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#key SagemakerEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList;

new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```java
public SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>>

---


### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference;

new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resetAlarmName">resetAlarmName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmName` <a name="resetAlarmName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resetAlarmName"></a>

```java
public void resetAlarmName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmNameInput"></a>

```java
public java.lang.String getAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```java
public java.lang.String getAlarmName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference <a name="SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;

new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms">putAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlarms` <a name="putAlarms" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms"></a>

```java
public void putAlarms(IResolvable|java.util.List<SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.putAlarms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>>

---

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resetAlarms"></a>

```java
public void resetAlarms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```java
public SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList getAlarms();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarmsInput"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms> getAlarmsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigAutoRollbackConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;

new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration">putTrafficRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">resetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTerminationWaitInSeconds">resetTerminationWaitInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTrafficRoutingConfiguration">resetTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficRoutingConfiguration` <a name="putTrafficRoutingConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration"></a>

```java
public void putTrafficRoutingConfiguration(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.putTrafficRoutingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---

##### `resetMaximumExecutionTimeoutInSeconds` <a name="resetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```java
public void resetMaximumExecutionTimeoutInSeconds()
```

##### `resetTerminationWaitInSeconds` <a name="resetTerminationWaitInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTerminationWaitInSeconds"></a>

```java
public void resetTerminationWaitInSeconds()
```

##### `resetTrafficRoutingConfiguration` <a name="resetTrafficRoutingConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resetTrafficRoutingConfiguration"></a>

```java
public void resetTrafficRoutingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration">trafficRoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">maximumExecutionTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSecondsInput">terminationWaitInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfigurationInput">trafficRoutingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds">terminationWaitInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficRoutingConfiguration`<sup>Required</sup> <a name="trafficRoutingConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference getTrafficRoutingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a>

---

##### `maximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `terminationWaitInSecondsInput`<sup>Optional</sup> <a name="terminationWaitInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSecondsInput"></a>

```java
public java.lang.Number getTerminationWaitInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `trafficRoutingConfigurationInput`<sup>Optional</sup> <a name="trafficRoutingConfigurationInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfigurationInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration getTrafficRoutingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `terminationWaitInSeconds`<sup>Required</sup> <a name="terminationWaitInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds"></a>

```java
public java.lang.Number getTerminationWaitInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;

new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;

new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---


### SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference <a name="SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;

new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize">putCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize">putLinearStepSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetCanarySize">resetCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetLinearStepSize">resetLinearStepSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetWaitIntervalInSeconds">resetWaitIntervalInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCanarySize` <a name="putCanarySize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize"></a>

```java
public void putCanarySize(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putCanarySize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---

##### `putLinearStepSize` <a name="putLinearStepSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize"></a>

```java
public void putLinearStepSize(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.putLinearStepSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---

##### `resetCanarySize` <a name="resetCanarySize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetCanarySize"></a>

```java
public void resetCanarySize()
```

##### `resetLinearStepSize` <a name="resetLinearStepSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetLinearStepSize"></a>

```java
public void resetLinearStepSize()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetWaitIntervalInSeconds` <a name="resetWaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resetWaitIntervalInSeconds"></a>

```java
public void resetWaitIntervalInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize">canarySize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize">linearStepSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySizeInput">canarySizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSizeInput">linearStepSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSecondsInput">waitIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canarySize`<sup>Required</sup> <a name="canarySize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference getCanarySize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a>

---

##### `linearStepSize`<sup>Required</sup> <a name="linearStepSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference getLinearStepSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a>

---

##### `canarySizeInput`<sup>Optional</sup> <a name="canarySizeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySizeInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize getCanarySizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---

##### `linearStepSizeInput`<sup>Optional</sup> <a name="linearStepSizeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSizeInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize getLinearStepSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `waitIntervalInSecondsInput`<sup>Optional</sup> <a name="waitIntervalInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSecondsInput"></a>

```java
public java.lang.Number getWaitIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---


### SagemakerEndpointDeploymentConfigOutputReference <a name="SagemakerEndpointDeploymentConfigOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigOutputReference;

new SagemakerEndpointDeploymentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration">putAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy">putBlueGreenUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putRollingUpdatePolicy">putRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetAutoRollbackConfiguration">resetAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetBlueGreenUpdatePolicy">resetBlueGreenUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetRollingUpdatePolicy">resetRollingUpdatePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoRollbackConfiguration` <a name="putAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration"></a>

```java
public void putAutoRollbackConfiguration(SagemakerEndpointDeploymentConfigAutoRollbackConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putAutoRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---

##### `putBlueGreenUpdatePolicy` <a name="putBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy"></a>

```java
public void putBlueGreenUpdatePolicy(SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putBlueGreenUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---

##### `putRollingUpdatePolicy` <a name="putRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putRollingUpdatePolicy"></a>

```java
public void putRollingUpdatePolicy(SagemakerEndpointDeploymentConfigRollingUpdatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.putRollingUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---

##### `resetAutoRollbackConfiguration` <a name="resetAutoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetAutoRollbackConfiguration"></a>

```java
public void resetAutoRollbackConfiguration()
```

##### `resetBlueGreenUpdatePolicy` <a name="resetBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetBlueGreenUpdatePolicy"></a>

```java
public void resetBlueGreenUpdatePolicy()
```

##### `resetRollingUpdatePolicy` <a name="resetRollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.resetRollingUpdatePolicy"></a>

```java
public void resetRollingUpdatePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration">autoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy">blueGreenUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy">rollingUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfigurationInput">autoRollbackConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicyInput">blueGreenUpdatePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicyInput">rollingUpdatePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRollbackConfiguration`<sup>Required</sup> <a name="autoRollbackConfiguration" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```java
public SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference getAutoRollbackConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `blueGreenUpdatePolicy`<sup>Required</sup> <a name="blueGreenUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy"></a>

```java
public SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference getBlueGreenUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a>

---

##### `rollingUpdatePolicy`<sup>Required</sup> <a name="rollingUpdatePolicy" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference getRollingUpdatePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `autoRollbackConfigurationInput`<sup>Optional</sup> <a name="autoRollbackConfigurationInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfigurationInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigAutoRollbackConfiguration getAutoRollbackConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigAutoRollbackConfiguration">SagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---

##### `blueGreenUpdatePolicyInput`<sup>Optional</sup> <a name="blueGreenUpdatePolicyInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicyInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy getBlueGreenUpdatePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---

##### `rollingUpdatePolicyInput`<sup>Optional</sup> <a name="rollingUpdatePolicyInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicyInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicy getRollingUpdatePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfig">SagemakerEndpointDeploymentConfig</a>

---


### SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference;

new SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference;

new SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize">putMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize">putRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize">resetMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds">resetMaximumExecutionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize">resetRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetWaitIntervalInSeconds">resetWaitIntervalInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumBatchSize` <a name="putMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize"></a>

```java
public void putMaximumBatchSize(SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `putRollbackMaximumBatchSize` <a name="putRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize"></a>

```java
public void putRollbackMaximumBatchSize(SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.putRollbackMaximumBatchSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `resetMaximumBatchSize` <a name="resetMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumBatchSize"></a>

```java
public void resetMaximumBatchSize()
```

##### `resetMaximumExecutionTimeoutInSeconds` <a name="resetMaximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetMaximumExecutionTimeoutInSeconds"></a>

```java
public void resetMaximumExecutionTimeoutInSeconds()
```

##### `resetRollbackMaximumBatchSize` <a name="resetRollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetRollbackMaximumBatchSize"></a>

```java
public void resetRollbackMaximumBatchSize()
```

##### `resetWaitIntervalInSeconds` <a name="resetWaitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resetWaitIntervalInSeconds"></a>

```java
public void resetWaitIntervalInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollbackMaximumBatchSize</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput">maximumBatchSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput">maximumExecutionTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput">rollbackMaximumBatchSizeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput">waitIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximumExecutionTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">waitIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBatchSize`<sup>Required</sup> <a name="maximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference getMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `rollbackMaximumBatchSize`<sup>Required</sup> <a name="rollbackMaximumBatchSize" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```java
public SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference getRollbackMaximumBatchSize();
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `maximumBatchSizeInput`<sup>Optional</sup> <a name="maximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSizeInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize getMaximumBatchSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---

##### `maximumExecutionTimeoutInSecondsInput`<sup>Optional</sup> <a name="maximumExecutionTimeoutInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSecondsInput"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `rollbackMaximumBatchSizeInput`<sup>Optional</sup> <a name="rollbackMaximumBatchSizeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSizeInput"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getRollbackMaximumBatchSizeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---

##### `waitIntervalInSecondsInput`<sup>Optional</sup> <a name="waitIntervalInSecondsInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSecondsInput"></a>

```java
public java.lang.Number getWaitIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumExecutionTimeoutInSeconds`<sup>Required</sup> <a name="maximumExecutionTimeoutInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```java
public java.lang.Number getMaximumExecutionTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `waitIntervalInSeconds`<sup>Required</sup> <a name="waitIntervalInSeconds" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```java
public java.lang.Number getWaitIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicy">SagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---


### SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference;

new SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### SagemakerEndpointExcludeRetainedVariantPropertiesList <a name="SagemakerEndpointExcludeRetainedVariantPropertiesList" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList;

new SagemakerEndpointExcludeRetainedVariantPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.get"></a>

```java
public SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointExcludeRetainedVariantProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>>

---


### SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference <a name="SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference;

new SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resetVariantPropertyType">resetVariantPropertyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariantPropertyType` <a name="resetVariantPropertyType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resetVariantPropertyType"></a>

```java
public void resetVariantPropertyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyTypeInput">variantPropertyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType">variantPropertyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `variantPropertyTypeInput`<sup>Optional</sup> <a name="variantPropertyTypeInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyTypeInput"></a>

```java
public java.lang.String getVariantPropertyTypeInput();
```

- *Type:* java.lang.String

---

##### `variantPropertyType`<sup>Required</sup> <a name="variantPropertyType" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType"></a>

```java
public java.lang.String getVariantPropertyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointExcludeRetainedVariantProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointExcludeRetainedVariantProperties">SagemakerEndpointExcludeRetainedVariantProperties</a>

---


### SagemakerEndpointTagsList <a name="SagemakerEndpointTagsList" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointTagsList;

new SagemakerEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.get"></a>

```java
public SagemakerEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SagemakerEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>>

---


### SagemakerEndpointTagsOutputReference <a name="SagemakerEndpointTagsOutputReference" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.sagemaker_endpoint.SagemakerEndpointTagsOutputReference;

new SagemakerEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SagemakerEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerEndpoint.SagemakerEndpointTags">SagemakerEndpointTags</a>

---



