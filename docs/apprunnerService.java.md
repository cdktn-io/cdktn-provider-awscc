# `apprunnerService` Submodule <a name="`apprunnerService` Submodule" id="@cdktn/provider-awscc.apprunnerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerService <a name="ApprunnerService" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service awscc_apprunner_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerService;

ApprunnerService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceConfiguration(ApprunnerServiceSourceConfiguration)
//  .autoScalingConfigurationArn(java.lang.String)
//  .encryptionConfiguration(ApprunnerServiceEncryptionConfiguration)
//  .healthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration)
//  .instanceConfiguration(ApprunnerServiceInstanceConfiguration)
//  .networkConfiguration(ApprunnerServiceNetworkConfiguration)
//  .observabilityConfiguration(ApprunnerServiceObservabilityConfiguration)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<ApprunnerServiceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | Source Code configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Autoscaling configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | Encryption configuration (KMS key). |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | Health check configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | Instance Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | Network configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | Service observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The AppRunner Service Name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.sourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

Source Code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `autoScalingConfigurationArn`<sup>Optional</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.autoScalingConfigurationArn"></a>

- *Type:* java.lang.String

Autoscaling configuration ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

Encryption configuration (KMS key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `healthCheckConfiguration`<sup>Optional</sup> <a name="healthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.healthCheckConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

Health check configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `instanceConfiguration`<sup>Optional</sup> <a name="instanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.instanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

Instance Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

Network configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observabilityConfiguration`<sup>Optional</sup> <a name="observabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.observabilityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

Service observability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

The AppRunner Service Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration">putHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration">putInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration">putObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn">resetAutoScalingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration">resetHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration">resetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration">resetObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(ApprunnerServiceEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `putHealthCheckConfiguration` <a name="putHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration"></a>

```java
public void putHealthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `putInstanceConfiguration` <a name="putInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration"></a>

```java
public void putInstanceConfiguration(ApprunnerServiceInstanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(ApprunnerServiceNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `putObservabilityConfiguration` <a name="putObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration"></a>

```java
public void putObservabilityConfiguration(ApprunnerServiceObservabilityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration"></a>

```java
public void putSourceConfiguration(ApprunnerServiceSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApprunnerServiceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>>

---

##### `resetAutoScalingConfigurationArn` <a name="resetAutoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn"></a>

```java
public void resetAutoScalingConfigurationArn()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetHealthCheckConfiguration` <a name="resetHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration"></a>

```java
public void resetHealthCheckConfiguration()
```

##### `resetInstanceConfiguration` <a name="resetInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration"></a>

```java
public void resetInstanceConfiguration()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetObservabilityConfiguration` <a name="resetObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration"></a>

```java
public void resetObservabilityConfiguration()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerService;

ApprunnerService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerService;

ApprunnerService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerService;

ApprunnerService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerService;

ApprunnerService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApprunnerService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApprunnerService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApprunnerService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl">serviceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput">autoScalingConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput">healthCheckConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput">instanceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput">observabilityConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration"></a>

```java
public ApprunnerServiceEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a>

---

##### `healthCheckConfiguration`<sup>Required</sup> <a name="healthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration"></a>

```java
public ApprunnerServiceHealthCheckConfigurationOutputReference getHealthCheckConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceConfiguration`<sup>Required</sup> <a name="instanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration"></a>

```java
public ApprunnerServiceInstanceConfigurationOutputReference getInstanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a>

---

##### `observabilityConfiguration`<sup>Required</sup> <a name="observabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration"></a>

```java
public ApprunnerServiceObservabilityConfigurationOutputReference getObservabilityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl"></a>

```java
public java.lang.String getServiceUrl();
```

- *Type:* java.lang.String

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationOutputReference getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags"></a>

```java
public ApprunnerServiceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a>

---

##### `autoScalingConfigurationArnInput`<sup>Optional</sup> <a name="autoScalingConfigurationArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput"></a>

```java
public java.lang.String getAutoScalingConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `healthCheckConfigurationInput`<sup>Optional</sup> <a name="healthCheckConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceHealthCheckConfiguration getHealthCheckConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `instanceConfigurationInput`<sup>Optional</sup> <a name="instanceConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceInstanceConfiguration getInstanceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `observabilityConfigurationInput`<sup>Optional</sup> <a name="observabilityConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceObservabilityConfiguration getObservabilityConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfiguration getSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>>

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerServiceConfig <a name="ApprunnerServiceConfig" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceConfig;

ApprunnerServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .sourceConfiguration(ApprunnerServiceSourceConfiguration)
//  .autoScalingConfigurationArn(java.lang.String)
//  .encryptionConfiguration(ApprunnerServiceEncryptionConfiguration)
//  .healthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration)
//  .instanceConfiguration(ApprunnerServiceInstanceConfiguration)
//  .networkConfiguration(ApprunnerServiceNetworkConfiguration)
//  .observabilityConfiguration(ApprunnerServiceObservabilityConfiguration)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<ApprunnerServiceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | Source Code configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | Autoscaling configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | Encryption configuration (KMS key). |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration">healthCheckConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | Health check configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration">instanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | Instance Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | Network configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration">observabilityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | Service observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The AppRunner Service Name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration"></a>

```java
public ApprunnerServiceSourceConfiguration getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

Source Code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `autoScalingConfigurationArn`<sup>Optional</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

Autoscaling configuration ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration"></a>

```java
public ApprunnerServiceEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

Encryption configuration (KMS key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `healthCheckConfiguration`<sup>Optional</sup> <a name="healthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration"></a>

```java
public ApprunnerServiceHealthCheckConfiguration getHealthCheckConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

Health check configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `instanceConfiguration`<sup>Optional</sup> <a name="instanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration"></a>

```java
public ApprunnerServiceInstanceConfiguration getInstanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

Instance Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration"></a>

```java
public ApprunnerServiceNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

Network configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `observabilityConfiguration`<sup>Optional</sup> <a name="observabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration"></a>

```java
public ApprunnerServiceObservabilityConfiguration getObservabilityConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

Service observability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The AppRunner Service Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}.

---

### ApprunnerServiceEncryptionConfiguration <a name="ApprunnerServiceEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceEncryptionConfiguration;

ApprunnerServiceEncryptionConfiguration.builder()
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The KMS Key. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#kms_key ApprunnerService#kms_key}

---

### ApprunnerServiceHealthCheckConfiguration <a name="ApprunnerServiceHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceHealthCheckConfiguration;

ApprunnerServiceHealthCheckConfiguration.builder()
//  .healthyThreshold(java.lang.Number)
//  .interval(java.lang.Number)
//  .path(java.lang.String)
//  .protocol(java.lang.String)
//  .timeout(java.lang.Number)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Health check Healthy Threshold. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval">interval</a></code> | <code>java.lang.Number</code> | Health check Interval. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path">path</a></code> | <code>java.lang.String</code> | Health check Path. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Health Check Protocol. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Health check Timeout. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Health check Unhealthy Threshold. |

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Health check Healthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Health check Interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#interval ApprunnerService#interval}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Health check Path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#path ApprunnerService#path}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Health Check Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#protocol ApprunnerService#protocol}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Health check Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#timeout ApprunnerService#timeout}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Health check Unhealthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}

---

### ApprunnerServiceInstanceConfiguration <a name="ApprunnerServiceInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceInstanceConfiguration;

ApprunnerServiceInstanceConfiguration.builder()
//  .cpu(java.lang.String)
//  .instanceRoleArn(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu">cpu</a></code> | <code>java.lang.String</code> | CPU. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | Instance Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory">memory</a></code> | <code>java.lang.String</code> | Memory. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#cpu ApprunnerService#cpu}

---

##### `instanceRoleArn`<sup>Optional</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

Instance Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#memory ApprunnerService#memory}

---

### ApprunnerServiceNetworkConfiguration <a name="ApprunnerServiceNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfiguration;

ApprunnerServiceNetworkConfiguration.builder()
//  .egressConfiguration(ApprunnerServiceNetworkConfigurationEgressConfiguration)
//  .ingressConfiguration(ApprunnerServiceNetworkConfigurationIngressConfiguration)
//  .ipAddressType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration">egressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | Network egress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration">ingressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | Network ingress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | App Runner service endpoint IP address type. |

---

##### `egressConfiguration`<sup>Optional</sup> <a name="egressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfiguration getEgressConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

Network egress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

##### `ingressConfiguration`<sup>Optional</sup> <a name="ingressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfiguration getIngressConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

Network ingress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

App Runner service endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#ip_address_type ApprunnerService#ip_address_type}

---

### ApprunnerServiceNetworkConfigurationEgressConfiguration <a name="ApprunnerServiceNetworkConfigurationEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfigurationEgressConfiguration;

ApprunnerServiceNetworkConfigurationEgressConfiguration.builder()
//  .egressType(java.lang.String)
//  .vpcConnectorArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType">egressType</a></code> | <code>java.lang.String</code> | Network egress type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn">vpcConnectorArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the App Runner VpcConnector. |

---

##### `egressType`<sup>Optional</sup> <a name="egressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

Network egress type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#egress_type ApprunnerService#egress_type}

---

##### `vpcConnectorArn`<sup>Optional</sup> <a name="vpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn"></a>

```java
public java.lang.String getVpcConnectorArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the App Runner VpcConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}

---

### ApprunnerServiceNetworkConfigurationIngressConfiguration <a name="ApprunnerServiceNetworkConfigurationIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfigurationIngressConfiguration;

ApprunnerServiceNetworkConfigurationIngressConfiguration.builder()
//  .isPubliclyAccessible(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible">isPubliclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise. |

---

##### `isPubliclyAccessible`<sup>Optional</sup> <a name="isPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getIsPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}

---

### ApprunnerServiceObservabilityConfiguration <a name="ApprunnerServiceObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceObservabilityConfiguration;

ApprunnerServiceObservabilityConfiguration.builder()
//  .observabilityConfigurationArn(java.lang.String)
//  .observabilityEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn">observabilityConfigurationArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled">observabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Observability enabled. |

---

##### `observabilityConfigurationArn`<sup>Optional</sup> <a name="observabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```java
public java.lang.String getObservabilityConfigurationArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}

---

##### `observabilityEnabled`<sup>Optional</sup> <a name="observabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getObservabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Observability enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_enabled ApprunnerService#observability_enabled}

---

### ApprunnerServiceSourceConfiguration <a name="ApprunnerServiceSourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfiguration;

ApprunnerServiceSourceConfiguration.builder()
//  .authenticationConfiguration(ApprunnerServiceSourceConfigurationAuthenticationConfiguration)
//  .autoDeploymentsEnabled(java.lang.Boolean|IResolvable)
//  .codeRepository(ApprunnerServiceSourceConfigurationCodeRepository)
//  .imageRepository(ApprunnerServiceSourceConfigurationImageRepository)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | Authentication Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled">autoDeploymentsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Auto Deployment enabled. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | Source Code Repository. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository">imageRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | Image Repository. |

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

Authentication Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

##### `autoDeploymentsEnabled`<sup>Optional</sup> <a name="autoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploymentsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Auto Deployment enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}

---

##### `codeRepository`<sup>Optional</sup> <a name="codeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepository getCodeRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

Source Code Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_repository ApprunnerService#code_repository}

---

##### `imageRepository`<sup>Optional</sup> <a name="imageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepository getImageRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

Image Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_repository ApprunnerService#image_repository}

---

### ApprunnerServiceSourceConfigurationAuthenticationConfiguration <a name="ApprunnerServiceSourceConfigurationAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationAuthenticationConfiguration;

ApprunnerServiceSourceConfigurationAuthenticationConfiguration.builder()
//  .accessRoleArn(java.lang.String)
//  .connectionArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | Access Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | Connection Arn. |

---

##### `accessRoleArn`<sup>Optional</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

Access Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#access_role_arn ApprunnerService#access_role_arn}

---

##### `connectionArn`<sup>Optional</sup> <a name="connectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

Connection Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#connection_arn ApprunnerService#connection_arn}

---

### ApprunnerServiceSourceConfigurationCodeRepository <a name="ApprunnerServiceSourceConfigurationCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepository;

ApprunnerServiceSourceConfigurationCodeRepository.builder()
//  .codeConfiguration(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration)
//  .repositoryUrl(java.lang.String)
//  .sourceCodeVersion(ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion)
//  .sourceDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | Code Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | Repository Url. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion">sourceCodeVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | Source Code Version. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory">sourceDirectory</a></code> | <code>java.lang.String</code> | Source Directory. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

Code Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

Repository Url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#repository_url ApprunnerService#repository_url}

---

##### `sourceCodeVersion`<sup>Optional</sup> <a name="sourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getSourceCodeVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

Source Code Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

##### `sourceDirectory`<sup>Optional</sup> <a name="sourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory"></a>

```java
public java.lang.String getSourceDirectory();
```

- *Type:* java.lang.String

Source Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_directory ApprunnerService#source_directory}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.builder()
//  .codeConfigurationValues(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues)
//  .configurationSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues">codeConfigurationValues</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | Code Configuration Values. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource">configurationSource</a></code> | <code>java.lang.String</code> | Configuration Source. |

---

##### `codeConfigurationValues`<sup>Optional</sup> <a name="codeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getCodeConfigurationValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

Code Configuration Values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

##### `configurationSource`<sup>Optional</sup> <a name="configurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource"></a>

```java
public java.lang.String getConfigurationSource();
```

- *Type:* java.lang.String

Configuration Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#configuration_source ApprunnerService#configuration_source}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.builder()
//  .buildCommand(java.lang.String)
//  .port(java.lang.String)
//  .runtime(java.lang.String)
//  .runtimeEnvironmentSecrets(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets>)
//  .runtimeEnvironmentVariables(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables>)
//  .startCommand(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | Build Command. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port">port</a></code> | <code>java.lang.String</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Runtime. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>></code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | Start Command. |

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

Build Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#build_command ApprunnerService#build_command}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime ApprunnerService#runtime}

---

##### `runtimeEnvironmentSecrets`<sup>Optional</sup> <a name="runtimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets> getRuntimeEnvironmentSecrets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>>

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `runtimeEnvironmentVariables`<sup>Optional</sup> <a name="runtimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables> getRuntimeEnvironmentVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `startCommand`<sup>Optional</sup> <a name="startCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables;

ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;

ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.builder()
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type">type</a></code> | <code>java.lang.String</code> | Source Code Version Type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value">value</a></code> | <code>java.lang.String</code> | Source Code Version Value. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Source Code Version Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#type ApprunnerService#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Source Code Version Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}

---

### ApprunnerServiceSourceConfigurationImageRepository <a name="ApprunnerServiceSourceConfigurationImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepository;

ApprunnerServiceSourceConfigurationImageRepository.builder()
//  .imageConfiguration(ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration)
//  .imageIdentifier(java.lang.String)
//  .imageRepositoryType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | Image Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | Image Identifier. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType">imageRepositoryType</a></code> | <code>java.lang.String</code> | Image Repository Type. |

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

Image Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

##### `imageIdentifier`<sup>Optional</sup> <a name="imageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

Image Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_identifier ApprunnerService#image_identifier}

---

##### `imageRepositoryType`<sup>Optional</sup> <a name="imageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType"></a>

```java
public java.lang.String getImageRepositoryType();
```

- *Type:* java.lang.String

Image Repository Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_repository_type ApprunnerService#image_repository_type}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;

ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.builder()
//  .port(java.lang.String)
//  .runtimeEnvironmentSecrets(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets>)
//  .runtimeEnvironmentVariables(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables>)
//  .startCommand(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port">port</a></code> | <code>java.lang.String</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>></code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | Start Command. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `runtimeEnvironmentSecrets`<sup>Optional</sup> <a name="runtimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets> getRuntimeEnvironmentSecrets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>>

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `runtimeEnvironmentVariables`<sup>Optional</sup> <a name="runtimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables> getRuntimeEnvironmentVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `startCommand`<sup>Optional</sup> <a name="startCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets;

ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables;

ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceTags <a name="ApprunnerServiceTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceTags;

ApprunnerServiceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#key ApprunnerService#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#key ApprunnerService#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerServiceEncryptionConfigurationOutputReference <a name="ApprunnerServiceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceEncryptionConfigurationOutputReference;

new ApprunnerServiceEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---


### ApprunnerServiceHealthCheckConfigurationOutputReference <a name="ApprunnerServiceHealthCheckConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceHealthCheckConfigurationOutputReference;

new ApprunnerServiceHealthCheckConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceHealthCheckConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---


### ApprunnerServiceInstanceConfigurationOutputReference <a name="ApprunnerServiceInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceInstanceConfigurationOutputReference;

new ApprunnerServiceInstanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn">resetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetInstanceRoleArn` <a name="resetInstanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn"></a>

```java
public void resetInstanceRoleArn()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput">instanceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn">instanceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `instanceRoleArnInput`<sup>Optional</sup> <a name="instanceRoleArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput"></a>

```java
public java.lang.String getInstanceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `instanceRoleArn`<sup>Required</sup> <a name="instanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn"></a>

```java
public java.lang.String getInstanceRoleArn();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceInstanceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType">resetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn">resetVpcConnectorArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEgressType` <a name="resetEgressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType"></a>

```java
public void resetEgressType()
```

##### `resetVpcConnectorArn` <a name="resetVpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn"></a>

```java
public void resetVpcConnectorArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput">egressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput">vpcConnectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType">egressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn">vpcConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressTypeInput`<sup>Optional</sup> <a name="egressTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput"></a>

```java
public java.lang.String getEgressTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectorArnInput`<sup>Optional</sup> <a name="vpcConnectorArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput"></a>

```java
public java.lang.String getVpcConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `egressType`<sup>Required</sup> <a name="egressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

---

##### `vpcConnectorArn`<sup>Required</sup> <a name="vpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn"></a>

```java
public java.lang.String getVpcConnectorArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfigurationEgressConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible">resetIsPubliclyAccessible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsPubliclyAccessible` <a name="resetIsPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible"></a>

```java
public void resetIsPubliclyAccessible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput">isPubliclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible">isPubliclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isPubliclyAccessibleInput`<sup>Optional</sup> <a name="isPubliclyAccessibleInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isPubliclyAccessible`<sup>Required</sup> <a name="isPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getIsPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfigurationIngressConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceNetworkConfigurationOutputReference;

new ApprunnerServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration">putEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration">putIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration">resetEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration">resetIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressConfiguration` <a name="putEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration"></a>

```java
public void putEgressConfiguration(ApprunnerServiceNetworkConfigurationEgressConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `putIngressConfiguration` <a name="putIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration"></a>

```java
public void putIngressConfiguration(ApprunnerServiceNetworkConfigurationIngressConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `resetEgressConfiguration` <a name="resetEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration"></a>

```java
public void resetEgressConfiguration()
```

##### `resetIngressConfiguration` <a name="resetIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration"></a>

```java
public void resetIngressConfiguration()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration">egressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration">ingressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput">egressConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput">ingressConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressConfiguration`<sup>Required</sup> <a name="egressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference getEgressConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a>

---

##### `ingressConfiguration`<sup>Required</sup> <a name="ingressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration"></a>

```java
public ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference getIngressConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a>

---

##### `egressConfigurationInput`<sup>Optional</sup> <a name="egressConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfigurationEgressConfiguration getEgressConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `ingressConfigurationInput`<sup>Optional</sup> <a name="ingressConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfigurationIngressConfiguration getIngressConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---


### ApprunnerServiceObservabilityConfigurationOutputReference <a name="ApprunnerServiceObservabilityConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceObservabilityConfigurationOutputReference;

new ApprunnerServiceObservabilityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn">resetObservabilityConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled">resetObservabilityEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetObservabilityConfigurationArn` <a name="resetObservabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn"></a>

```java
public void resetObservabilityConfigurationArn()
```

##### `resetObservabilityEnabled` <a name="resetObservabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled"></a>

```java
public void resetObservabilityEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput">observabilityConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput">observabilityEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn">observabilityConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled">observabilityEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `observabilityConfigurationArnInput`<sup>Optional</sup> <a name="observabilityConfigurationArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput"></a>

```java
public java.lang.String getObservabilityConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `observabilityEnabledInput`<sup>Optional</sup> <a name="observabilityEnabledInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getObservabilityEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `observabilityConfigurationArn`<sup>Required</sup> <a name="observabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn"></a>

```java
public java.lang.String getObservabilityConfigurationArn();
```

- *Type:* java.lang.String

---

##### `observabilityEnabled`<sup>Required</sup> <a name="observabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled"></a>

```java
public java.lang.Boolean|IResolvable getObservabilityEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceObservabilityConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---


### ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn">resetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn">resetConnectionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessRoleArn` <a name="resetAccessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn"></a>

```java
public void resetAccessRoleArn()
```

##### `resetConnectionArn` <a name="resetConnectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn"></a>

```java
public void resetConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput">accessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput">connectionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn">accessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn">connectionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRoleArnInput`<sup>Optional</sup> <a name="accessRoleArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput"></a>

```java
public java.lang.String getAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `connectionArnInput`<sup>Optional</sup> <a name="connectionArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput"></a>

```java
public java.lang.String getConnectionArnInput();
```

- *Type:* java.lang.String

---

##### `accessRoleArn`<sup>Required</sup> <a name="accessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn"></a>

```java
public java.lang.String getAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `connectionArn`<sup>Required</sup> <a name="connectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn"></a>

```java
public java.lang.String getConnectionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationAuthenticationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets">putRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables">putRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand">resetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets">resetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables">resetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand">resetStartCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuntimeEnvironmentSecrets` <a name="putRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets"></a>

```java
public void putRuntimeEnvironmentSecrets(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>>

---

##### `putRuntimeEnvironmentVariables` <a name="putRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables"></a>

```java
public void putRuntimeEnvironmentVariables(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>>

---

##### `resetBuildCommand` <a name="resetBuildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand"></a>

```java
public void resetBuildCommand()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetRuntimeEnvironmentSecrets` <a name="resetRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets"></a>

```java
public void resetRuntimeEnvironmentSecrets()
```

##### `resetRuntimeEnvironmentVariables` <a name="resetRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables"></a>

```java
public void resetRuntimeEnvironmentVariables()
```

##### `resetStartCommand` <a name="resetStartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand"></a>

```java
public void resetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput">buildCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput">runtimeEnvironmentSecretsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput">runtimeEnvironmentVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput">startCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand">buildCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecrets`<sup>Required</sup> <a name="runtimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList getRuntimeEnvironmentSecrets();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a>

---

##### `runtimeEnvironmentVariables`<sup>Required</sup> <a name="runtimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList getRuntimeEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a>

---

##### `buildCommandInput`<sup>Optional</sup> <a name="buildCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput"></a>

```java
public java.lang.String getBuildCommandInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="runtimeEnvironmentSecretsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets> getRuntimeEnvironmentSecretsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>>

---

##### `runtimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="runtimeEnvironmentVariablesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables> getRuntimeEnvironmentVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `startCommandInput`<sup>Optional</sup> <a name="startCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput"></a>

```java
public java.lang.String getStartCommandInput();
```

- *Type:* java.lang.String

---

##### `buildCommand`<sup>Required</sup> <a name="buildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand"></a>

```java
public java.lang.String getBuildCommand();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `startCommand`<sup>Required</sup> <a name="startCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues">putCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues">resetCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource">resetConfigurationSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfigurationValues` <a name="putCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues"></a>

```java
public void putCodeConfigurationValues(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `resetCodeConfigurationValues` <a name="resetCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues"></a>

```java
public void resetCodeConfigurationValues()
```

##### `resetConfigurationSource` <a name="resetConfigurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource"></a>

```java
public void resetConfigurationSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues">codeConfigurationValues</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput">codeConfigurationValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput">configurationSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource">configurationSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfigurationValues`<sup>Required</sup> <a name="codeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference getCodeConfigurationValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a>

---

##### `codeConfigurationValuesInput`<sup>Optional</sup> <a name="codeConfigurationValuesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues getCodeConfigurationValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `configurationSourceInput`<sup>Optional</sup> <a name="configurationSourceInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput"></a>

```java
public java.lang.String getConfigurationSourceInput();
```

- *Type:* java.lang.String

---

##### `configurationSource`<sup>Required</sup> <a name="configurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource"></a>

```java
public java.lang.String getConfigurationSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion">putSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion">resetSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory">resetSourceDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `putSourceCodeVersion` <a name="putSourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion"></a>

```java
public void putSourceCodeVersion(ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```

##### `resetSourceCodeVersion` <a name="resetSourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion"></a>

```java
public void resetSourceCodeVersion()
```

##### `resetSourceDirectory` <a name="resetSourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory"></a>

```java
public void resetSourceDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion">sourceCodeVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput">sourceCodeVersionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput">sourceDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory">sourceDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a>

---

##### `sourceCodeVersion`<sup>Required</sup> <a name="sourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference getSourceCodeVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a>

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration getCodeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceCodeVersionInput`<sup>Optional</sup> <a name="sourceCodeVersionInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getSourceCodeVersionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `sourceDirectoryInput`<sup>Optional</sup> <a name="sourceDirectoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput"></a>

```java
public java.lang.String getSourceDirectoryInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `sourceDirectory`<sup>Required</sup> <a name="sourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory"></a>

```java
public java.lang.String getSourceDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;

new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets">putRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables">putRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets">resetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables">resetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand">resetStartCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuntimeEnvironmentSecrets` <a name="putRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets"></a>

```java
public void putRuntimeEnvironmentSecrets(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>>

---

##### `putRuntimeEnvironmentVariables` <a name="putRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables"></a>

```java
public void putRuntimeEnvironmentVariables(IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>>

---

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRuntimeEnvironmentSecrets` <a name="resetRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets"></a>

```java
public void resetRuntimeEnvironmentSecrets()
```

##### `resetRuntimeEnvironmentVariables` <a name="resetRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables"></a>

```java
public void resetRuntimeEnvironmentVariables()
```

##### `resetStartCommand` <a name="resetStartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand"></a>

```java
public void resetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets">runtimeEnvironmentSecrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables">runtimeEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput">runtimeEnvironmentSecretsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput">runtimeEnvironmentVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput">startCommandInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand">startCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecrets`<sup>Required</sup> <a name="runtimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList getRuntimeEnvironmentSecrets();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a>

---

##### `runtimeEnvironmentVariables`<sup>Required</sup> <a name="runtimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList getRuntimeEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="runtimeEnvironmentSecretsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets> getRuntimeEnvironmentSecretsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>>

---

##### `runtimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="runtimeEnvironmentVariablesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables> getRuntimeEnvironmentVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>>

---

##### `startCommandInput`<sup>Optional</sup> <a name="startCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput"></a>

```java
public java.lang.String getStartCommandInput();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `startCommand`<sup>Required</sup> <a name="startCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand"></a>

```java
public java.lang.String getStartCommand();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;

new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier">resetImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType">resetImageRepositoryType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration"></a>

```java
public void putImageConfiguration(ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration"></a>

```java
public void resetImageConfiguration()
```

##### `resetImageIdentifier` <a name="resetImageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier"></a>

```java
public void resetImageIdentifier()
```

##### `resetImageRepositoryType` <a name="resetImageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType"></a>

```java
public void resetImageRepositoryType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput">imageIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput">imageRepositoryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier">imageIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType">imageRepositoryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a>

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration getImageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `imageIdentifierInput`<sup>Optional</sup> <a name="imageIdentifierInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput"></a>

```java
public java.lang.String getImageIdentifierInput();
```

- *Type:* java.lang.String

---

##### `imageRepositoryTypeInput`<sup>Optional</sup> <a name="imageRepositoryTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput"></a>

```java
public java.lang.String getImageRepositoryTypeInput();
```

- *Type:* java.lang.String

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier"></a>

```java
public java.lang.String getImageIdentifier();
```

- *Type:* java.lang.String

---

##### `imageRepositoryType`<sup>Required</sup> <a name="imageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType"></a>

```java
public java.lang.String getImageRepositoryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepository getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---


### ApprunnerServiceSourceConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceSourceConfigurationOutputReference;

new ApprunnerServiceSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository">putCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository">putImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled">resetAutoDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository">resetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository">resetImageRepository</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(ApprunnerServiceSourceConfigurationAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `putCodeRepository` <a name="putCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository"></a>

```java
public void putCodeRepository(ApprunnerServiceSourceConfigurationCodeRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `putImageRepository` <a name="putImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository"></a>

```java
public void putImageRepository(ApprunnerServiceSourceConfigurationImageRepository value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetAutoDeploymentsEnabled` <a name="resetAutoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled"></a>

```java
public void resetAutoDeploymentsEnabled()
```

##### `resetCodeRepository` <a name="resetCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository"></a>

```java
public void resetCodeRepository()
```

##### `resetImageRepository` <a name="resetImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository"></a>

```java
public void resetImageRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository">codeRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository">imageRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput">autoDeploymentsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput">codeRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput">imageRepositoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled">autoDeploymentsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration"></a>

```java
public ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `codeRepository`<sup>Required</sup> <a name="codeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository"></a>

```java
public ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference getCodeRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a>

---

##### `imageRepository`<sup>Required</sup> <a name="imageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository"></a>

```java
public ApprunnerServiceSourceConfigurationImageRepositoryOutputReference getImageRepository();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a>

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `autoDeploymentsEnabledInput`<sup>Optional</sup> <a name="autoDeploymentsEnabledInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploymentsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `codeRepositoryInput`<sup>Optional</sup> <a name="codeRepositoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepository getCodeRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `imageRepositoryInput`<sup>Optional</sup> <a name="imageRepositoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput"></a>

```java
public IResolvable|ApprunnerServiceSourceConfigurationImageRepository getImageRepositoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `autoDeploymentsEnabled`<sup>Required</sup> <a name="autoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDeploymentsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---


### ApprunnerServiceTagsList <a name="ApprunnerServiceTagsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceTagsList;

new ApprunnerServiceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get"></a>

```java
public ApprunnerServiceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerServiceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>>

---


### ApprunnerServiceTagsOutputReference <a name="ApprunnerServiceTagsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_service.ApprunnerServiceTagsOutputReference;

new ApprunnerServiceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerServiceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>

---



