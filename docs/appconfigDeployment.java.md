# `appconfigDeployment` Submodule <a name="`appconfigDeployment` Submodule" id="@cdktn/provider-awscc.appconfigDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeployment <a name="AppconfigDeployment" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment awscc_appconfig_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeployment;

AppconfigDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
    .configurationVersion(java.lang.String)
    .deploymentStrategyId(java.lang.String)
    .environmentId(java.lang.String)
//  .description(java.lang.String)
//  .dynamicExtensionParameters(IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters>)
//  .kmsKeyIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigDeploymentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationVersion">configurationVersion</a></code> | <code>java.lang.String</code> | The configuration version to deploy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.deploymentStrategyId">deploymentStrategyId</a></code> | <code>java.lang.String</code> | The deployment strategy ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The environment ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dynamicExtensionParameters">dynamicExtensionParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#application_id AppconfigDeployment#application_id}

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationProfileId"></a>

- *Type:* java.lang.String

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_profile_id AppconfigDeployment#configuration_profile_id}

---

##### `configurationVersion`<sup>Required</sup> <a name="configurationVersion" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.configurationVersion"></a>

- *Type:* java.lang.String

The configuration version to deploy.

If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_version AppconfigDeployment#configuration_version}

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.deploymentStrategyId"></a>

- *Type:* java.lang.String

The deployment strategy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

The environment ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#environment_id AppconfigDeployment#environment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#description AppconfigDeployment#description}

---

##### `dynamicExtensionParameters`<sup>Optional</sup> <a name="dynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.dynamicExtensionParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}.

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#kms_key_identifier AppconfigDeployment#kms_key_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#tags AppconfigDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters">putDynamicExtensionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDynamicExtensionParameters">resetDynamicExtensionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicExtensionParameters` <a name="putDynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters"></a>

```java
public void putDynamicExtensionParameters(IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putDynamicExtensionParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppconfigDeploymentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDynamicExtensionParameters` <a name="resetDynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetDynamicExtensionParameters"></a>

```java
public void resetDynamicExtensionParameters()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeployment;

AppconfigDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeployment;

AppconfigDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeployment;

AppconfigDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeployment;

AppconfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppconfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppconfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppconfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppconfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentNumber">deploymentNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParameters">dynamicExtensionParameters</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList">AppconfigDeploymentDynamicExtensionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList">AppconfigDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileIdInput">configurationProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersionInput">configurationVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyIdInput">deploymentStrategyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParametersInput">dynamicExtensionParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersion">configurationVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyId">deploymentStrategyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deploymentNumber`<sup>Required</sup> <a name="deploymentNumber" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentNumber"></a>

```java
public java.lang.String getDeploymentNumber();
```

- *Type:* java.lang.String

---

##### `dynamicExtensionParameters`<sup>Required</sup> <a name="dynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParameters"></a>

```java
public AppconfigDeploymentDynamicExtensionParametersList getDynamicExtensionParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList">AppconfigDeploymentDynamicExtensionParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tags"></a>

```java
public AppconfigDeploymentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList">AppconfigDeploymentTagsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `configurationProfileIdInput`<sup>Optional</sup> <a name="configurationProfileIdInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileIdInput"></a>

```java
public java.lang.String getConfigurationProfileIdInput();
```

- *Type:* java.lang.String

---

##### `configurationVersionInput`<sup>Optional</sup> <a name="configurationVersionInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersionInput"></a>

```java
public java.lang.String getConfigurationVersionInput();
```

- *Type:* java.lang.String

---

##### `deploymentStrategyIdInput`<sup>Optional</sup> <a name="deploymentStrategyIdInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyIdInput"></a>

```java
public java.lang.String getDeploymentStrategyIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dynamicExtensionParametersInput`<sup>Optional</sup> <a name="dynamicExtensionParametersInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.dynamicExtensionParametersInput"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters> getDynamicExtensionParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>>

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

---

##### `configurationVersion`<sup>Required</sup> <a name="configurationVersion" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.configurationVersion"></a>

```java
public java.lang.String getConfigurationVersion();
```

- *Type:* java.lang.String

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.deploymentStrategyId"></a>

```java
public java.lang.String getDeploymentStrategyId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentConfig <a name="AppconfigDeploymentConfig" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentConfig;

AppconfigDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .configurationProfileId(java.lang.String)
    .configurationVersion(java.lang.String)
    .deploymentStrategyId(java.lang.String)
    .environmentId(java.lang.String)
//  .description(java.lang.String)
//  .dynamicExtensionParameters(IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters>)
//  .kmsKeyIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigDeploymentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationProfileId">configurationProfileId</a></code> | <code>java.lang.String</code> | The configuration profile ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationVersion">configurationVersion</a></code> | <code>java.lang.String</code> | The configuration version to deploy. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.deploymentStrategyId">deploymentStrategyId</a></code> | <code>java.lang.String</code> | The deployment strategy ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The environment ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dynamicExtensionParameters">dynamicExtensionParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#application_id AppconfigDeployment#application_id}

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationProfileId"></a>

```java
public java.lang.String getConfigurationProfileId();
```

- *Type:* java.lang.String

The configuration profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_profile_id AppconfigDeployment#configuration_profile_id}

---

##### `configurationVersion`<sup>Required</sup> <a name="configurationVersion" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.configurationVersion"></a>

```java
public java.lang.String getConfigurationVersion();
```

- *Type:* java.lang.String

The configuration version to deploy.

If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#configuration_version AppconfigDeployment#configuration_version}

---

##### `deploymentStrategyId`<sup>Required</sup> <a name="deploymentStrategyId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.deploymentStrategyId"></a>

```java
public java.lang.String getDeploymentStrategyId();
```

- *Type:* java.lang.String

The deployment strategy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#deployment_strategy_id AppconfigDeployment#deployment_strategy_id}

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

The environment ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#environment_id AppconfigDeployment#environment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#description AppconfigDeployment#description}

---

##### `dynamicExtensionParameters`<sup>Optional</sup> <a name="dynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.dynamicExtensionParameters"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters> getDynamicExtensionParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#dynamic_extension_parameters AppconfigDeployment#dynamic_extension_parameters}.

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#kms_key_identifier AppconfigDeployment#kms_key_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#tags AppconfigDeployment#tags}

---

### AppconfigDeploymentDynamicExtensionParameters <a name="AppconfigDeploymentDynamicExtensionParameters" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentDynamicExtensionParameters;

AppconfigDeploymentDynamicExtensionParameters.builder()
//  .extensionReference(java.lang.String)
//  .parameterName(java.lang.String)
//  .parameterValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.extensionReference">extensionReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#extension_reference AppconfigDeployment#extension_reference}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_name AppconfigDeployment#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_value AppconfigDeployment#parameter_value}. |

---

##### `extensionReference`<sup>Optional</sup> <a name="extensionReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.extensionReference"></a>

```java
public java.lang.String getExtensionReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#extension_reference AppconfigDeployment#extension_reference}.

---

##### `parameterName`<sup>Optional</sup> <a name="parameterName" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_name AppconfigDeployment#parameter_name}.

---

##### `parameterValue`<sup>Optional</sup> <a name="parameterValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#parameter_value AppconfigDeployment#parameter_value}.

---

### AppconfigDeploymentTags <a name="AppconfigDeploymentTags" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentTags;

AppconfigDeploymentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key-value string map. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key-value string map.

The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#key AppconfigDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_deployment#value AppconfigDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigDeploymentDynamicExtensionParametersList <a name="AppconfigDeploymentDynamicExtensionParametersList" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentDynamicExtensionParametersList;

new AppconfigDeploymentDynamicExtensionParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get"></a>

```java
public AppconfigDeploymentDynamicExtensionParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentDynamicExtensionParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>>

---


### AppconfigDeploymentDynamicExtensionParametersOutputReference <a name="AppconfigDeploymentDynamicExtensionParametersOutputReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentDynamicExtensionParametersOutputReference;

new AppconfigDeploymentDynamicExtensionParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetExtensionReference">resetExtensionReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterName">resetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterValue">resetParameterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtensionReference` <a name="resetExtensionReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetExtensionReference"></a>

```java
public void resetExtensionReference()
```

##### `resetParameterName` <a name="resetParameterName" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterName"></a>

```java
public void resetParameterName()
```

##### `resetParameterValue` <a name="resetParameterValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.resetParameterValue"></a>

```java
public void resetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReferenceInput">extensionReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReference">extensionReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extensionReferenceInput`<sup>Optional</sup> <a name="extensionReferenceInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReferenceInput"></a>

```java
public java.lang.String getExtensionReferenceInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValueInput"></a>

```java
public java.lang.String getParameterValueInput();
```

- *Type:* java.lang.String

---

##### `extensionReference`<sup>Required</sup> <a name="extensionReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.extensionReference"></a>

```java
public java.lang.String getExtensionReference();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigDeploymentDynamicExtensionParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentDynamicExtensionParameters">AppconfigDeploymentDynamicExtensionParameters</a>

---


### AppconfigDeploymentTagsList <a name="AppconfigDeploymentTagsList" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentTagsList;

new AppconfigDeploymentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get"></a>

```java
public AppconfigDeploymentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigDeploymentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>>

---


### AppconfigDeploymentTagsOutputReference <a name="AppconfigDeploymentTagsOutputReference" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_deployment.AppconfigDeploymentTagsOutputReference;

new AppconfigDeploymentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigDeploymentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigDeployment.AppconfigDeploymentTags">AppconfigDeploymentTags</a>

---



