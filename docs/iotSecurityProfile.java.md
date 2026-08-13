# `iotSecurityProfile` Submodule <a name="`iotSecurityProfile` Submodule" id="@cdktn/provider-awscc.iotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityProfile <a name="IotSecurityProfile" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfile;

IotSecurityProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalMetricsToRetainV2(IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2>)
//  .alertTargets(IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets>)
//  .behaviors(IResolvable|java.util.List<IotSecurityProfileBehaviors>)
//  .metricsExportConfig(IotSecurityProfileMetricsExportConfig)
//  .securityProfileDescription(java.lang.String)
//  .securityProfileName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotSecurityProfileTags>)
//  .targetArns(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>></code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.alertTargets">alertTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>></code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.behaviors">behaviors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>></code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileDescription">securityProfileDescription</a></code> | <code>java.lang.String</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileName">securityProfileName</a></code> | <code>java.lang.String</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>></code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.targetArns">targetArns</a></code> | <code>java.util.List<java.lang.String></code> | A set of target ARNs that the security profile is attached to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.additionalMetricsToRetainV2"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>>

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `alertTargets`<sup>Optional</sup> <a name="alertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.alertTargets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>>

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.behaviors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>>

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `metricsExportConfig`<sup>Optional</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.metricsExportConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileDescription"></a>

- *Type:* java.lang.String

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `securityProfileName`<sup>Optional</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.securityProfileName"></a>

- *Type:* java.lang.String

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>>

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `targetArns`<sup>Optional</sup> <a name="targetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.targetArns"></a>

- *Type:* java.util.List<java.lang.String>

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2">putAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets">putAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors">putBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig">putMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2">resetAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets">resetAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig">resetMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription">resetSecurityProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName">resetSecurityProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns">resetTargetArns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalMetricsToRetainV2` <a name="putAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2"></a>

```java
public void putAdditionalMetricsToRetainV2(IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>>

---

##### `putAlertTargets` <a name="putAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets"></a>

```java
public void putAlertTargets(IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>>

---

##### `putBehaviors` <a name="putBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors"></a>

```java
public void putBehaviors(IResolvable|java.util.List<IotSecurityProfileBehaviors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>>

---

##### `putMetricsExportConfig` <a name="putMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig"></a>

```java
public void putMetricsExportConfig(IotSecurityProfileMetricsExportConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotSecurityProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>>

---

##### `resetAdditionalMetricsToRetainV2` <a name="resetAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2"></a>

```java
public void resetAdditionalMetricsToRetainV2()
```

##### `resetAlertTargets` <a name="resetAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets"></a>

```java
public void resetAlertTargets()
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors"></a>

```java
public void resetBehaviors()
```

##### `resetMetricsExportConfig` <a name="resetMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig"></a>

```java
public void resetMetricsExportConfig()
```

##### `resetSecurityProfileDescription` <a name="resetSecurityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription"></a>

```java
public void resetSecurityProfileDescription()
```

##### `resetSecurityProfileName` <a name="resetSecurityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName"></a>

```java
public void resetSecurityProfileName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetArns` <a name="resetTargetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns"></a>

```java
public void resetTargetArns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfile;

IotSecurityProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfile;

IotSecurityProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfile;

IotSecurityProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfile;

IotSecurityProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotSecurityProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets">alertTargets</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors">behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input">additionalMetricsToRetainV2Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput">alertTargetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput">behaviorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput">metricsExportConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput">securityProfileDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput">securityProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput">targetArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription">securityProfileDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName">securityProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns">targetArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalMetricsToRetainV2`<sup>Required</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```java
public IotSecurityProfileAdditionalMetricsToRetainV2List getAdditionalMetricsToRetainV2();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `alertTargets`<sup>Required</sup> <a name="alertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets"></a>

```java
public IotSecurityProfileAlertTargetsMap getAlertTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a>

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors"></a>

```java
public IotSecurityProfileBehaviorsList getBehaviors();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricsExportConfig`<sup>Required</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig"></a>

```java
public IotSecurityProfileMetricsExportConfigOutputReference getMetricsExportConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn"></a>

```java
public java.lang.String getSecurityProfileArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags"></a>

```java
public IotSecurityProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a>

---

##### `additionalMetricsToRetainV2Input`<sup>Optional</sup> <a name="additionalMetricsToRetainV2Input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2> getAdditionalMetricsToRetainV2Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>>

---

##### `alertTargetsInput`<sup>Optional</sup> <a name="alertTargetsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets> getAlertTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>>

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileBehaviors> getBehaviorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>>

---

##### `metricsExportConfigInput`<sup>Optional</sup> <a name="metricsExportConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput"></a>

```java
public IResolvable|IotSecurityProfileMetricsExportConfig getMetricsExportConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `securityProfileDescriptionInput`<sup>Optional</sup> <a name="securityProfileDescriptionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput"></a>

```java
public java.lang.String getSecurityProfileDescriptionInput();
```

- *Type:* java.lang.String

---

##### `securityProfileNameInput`<sup>Optional</sup> <a name="securityProfileNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput"></a>

```java
public java.lang.String getSecurityProfileNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>>

---

##### `targetArnsInput`<sup>Optional</sup> <a name="targetArnsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput"></a>

```java
public java.util.List<java.lang.String> getTargetArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityProfileDescription`<sup>Required</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription"></a>

```java
public java.lang.String getSecurityProfileDescription();
```

- *Type:* java.lang.String

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName"></a>

```java
public java.lang.String getSecurityProfileName();
```

- *Type:* java.lang.String

---

##### `targetArns`<sup>Required</sup> <a name="targetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns"></a>

```java
public java.util.List<java.lang.String> getTargetArns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2 <a name="IotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAdditionalMetricsToRetainV2;

IotSecurityProfileAdditionalMetricsToRetainV2.builder()
//  .exportMetric(java.lang.Boolean|IResolvable)
//  .metric(java.lang.String)
//  .metricDimension(IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric">exportMetric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric">metric</a></code> | <code>java.lang.String</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | The dimension of a metric. |

---

##### `exportMetric`<sup>Optional</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric"></a>

```java
public java.lang.Boolean|IResolvable getExportMetric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metricDimension`<sup>Optional</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension"></a>

```java
public IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension getMetricDimension();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;

IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.builder()
//  .dimensionName(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator">operator</a></code> | <code>java.lang.String</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileAlertTargets <a name="IotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAlertTargets;

IotSecurityProfileAlertTargets.builder()
//  .alertTargetArn(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn">alertTargetArn</a></code> | <code>java.lang.String</code> | The ARN of the notification target to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the role that grants permission to send alerts to the notification target. |

---

##### `alertTargetArn`<sup>Optional</sup> <a name="alertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn"></a>

```java
public java.lang.String getAlertTargetArn();
```

- *Type:* java.lang.String

The ARN of the notification target to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#alert_target_arn IotSecurityProfile#alert_target_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the role that grants permission to send alerts to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileBehaviors <a name="IotSecurityProfileBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviors;

IotSecurityProfileBehaviors.builder()
//  .criteria(IotSecurityProfileBehaviorsCriteria)
//  .exportMetric(java.lang.Boolean|IResolvable)
//  .metric(java.lang.String)
//  .metricDimension(IotSecurityProfileBehaviorsMetricDimension)
//  .name(java.lang.String)
//  .suppressAlerts(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | The criteria by which the behavior is determined to be normal. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric">exportMetric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric">metric</a></code> | <code>java.lang.String</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | The dimension of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name">name</a></code> | <code>java.lang.String</code> | The name for the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts">suppressAlerts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria"></a>

```java
public IotSecurityProfileBehaviorsCriteria getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

The criteria by which the behavior is determined to be normal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#criteria IotSecurityProfile#criteria}

---

##### `exportMetric`<sup>Optional</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric"></a>

```java
public java.lang.Boolean|IResolvable getExportMetric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metricDimension`<sup>Optional</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension"></a>

```java
public IotSecurityProfileBehaviorsMetricDimension getMetricDimension();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#name IotSecurityProfile#name}

---

##### `suppressAlerts`<sup>Optional</sup> <a name="suppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts"></a>

```java
public java.lang.Boolean|IResolvable getSuppressAlerts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed.

Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#suppress_alerts IotSecurityProfile#suppress_alerts}

---

### IotSecurityProfileBehaviorsCriteria <a name="IotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteria;

IotSecurityProfileBehaviorsCriteria.builder()
//  .comparisonOperator(java.lang.String)
//  .consecutiveDatapointsToAlarm(java.lang.Number)
//  .consecutiveDatapointsToClear(java.lang.Number)
//  .durationSeconds(java.lang.Number)
//  .mlDetectionConfig(IotSecurityProfileBehaviorsCriteriaMlDetectionConfig)
//  .statisticalThreshold(IotSecurityProfileBehaviorsCriteriaStatisticalThreshold)
//  .value(IotSecurityProfileBehaviorsCriteriaValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm">consecutiveDatapointsToAlarm</a></code> | <code>java.lang.Number</code> | If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear">consecutiveDatapointsToClear</a></code> | <code>java.lang.Number</code> | If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Use this to specify the time duration over which the behavior is evaluated. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig">mlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | The configuration of an ML Detect Security Profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold">statisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | The value to be compared with the metric. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}

---

##### `consecutiveDatapointsToAlarm`<sup>Optional</sup> <a name="consecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm"></a>

```java
public java.lang.Number getConsecutiveDatapointsToAlarm();
```

- *Type:* java.lang.Number

If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}

---

##### `consecutiveDatapointsToClear`<sup>Optional</sup> <a name="consecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear"></a>

```java
public java.lang.Number getConsecutiveDatapointsToClear();
```

- *Type:* java.lang.Number

If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Use this to specify the time duration over which the behavior is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}

---

##### `mlDetectionConfig`<sup>Optional</sup> <a name="mlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig"></a>

```java
public IotSecurityProfileBehaviorsCriteriaMlDetectionConfig getMlDetectionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

The configuration of an ML Detect Security Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}

---

##### `statisticalThreshold`<sup>Optional</sup> <a name="statisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold"></a>

```java
public IotSecurityProfileBehaviorsCriteriaStatisticalThreshold getStatisticalThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value"></a>

```java
public IotSecurityProfileBehaviorsCriteriaValue getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

The value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

### IotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;

IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.builder()
//  .confidenceLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High. |

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}

---

### IotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;

IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.builder()
//  .statistic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The percentile which resolves to a threshold value by which compliance with a behavior is determined. |

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The percentile which resolves to a threshold value by which compliance with a behavior is determined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}

---

### IotSecurityProfileBehaviorsCriteriaValue <a name="IotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaValue;

IotSecurityProfileBehaviorsCriteriaValue.builder()
//  .cidrs(java.util.List<java.lang.String>)
//  .count(java.lang.String)
//  .number(java.lang.Number)
//  .numbers(java.util.List<java.lang.Number>)
//  .ports(java.util.List<java.lang.Number>)
//  .strings(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count">count</a></code> | <code>java.lang.String</code> | If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number">number</a></code> | <code>java.lang.Number</code> | The numeral value of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers">numbers</a></code> | <code>java.util.List<java.lang.Number></code> | The numeral values of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings">strings</a></code> | <code>java.util.List<java.lang.String></code> | The string values of a metric. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

The numeral value of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers"></a>

```java
public java.util.List<java.lang.Number> getNumbers();
```

- *Type:* java.util.List<java.lang.Number>

The numeral values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings"></a>

```java
public java.util.List<java.lang.String> getStrings();
```

- *Type:* java.util.List<java.lang.String>

The string values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}

---

### IotSecurityProfileBehaviorsMetricDimension <a name="IotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsMetricDimension;

IotSecurityProfileBehaviorsMetricDimension.builder()
//  .dimensionName(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator">operator</a></code> | <code>java.lang.String</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileConfig <a name="IotSecurityProfileConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileConfig;

IotSecurityProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalMetricsToRetainV2(IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2>)
//  .alertTargets(IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets>)
//  .behaviors(IResolvable|java.util.List<IotSecurityProfileBehaviors>)
//  .metricsExportConfig(IotSecurityProfileMetricsExportConfig)
//  .securityProfileDescription(java.lang.String)
//  .securityProfileName(java.lang.String)
//  .tags(IResolvable|java.util.List<IotSecurityProfileTags>)
//  .targetArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>></code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets">alertTargets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>></code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors">behaviors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>></code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription">securityProfileDescription</a></code> | <code>java.lang.String</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName">securityProfileName</a></code> | <code>java.lang.String</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>></code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns">targetArns</a></code> | <code>java.util.List<java.lang.String></code> | A set of target ARNs that the security profile is attached to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2> getAdditionalMetricsToRetainV2();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>>

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `alertTargets`<sup>Optional</sup> <a name="alertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets> getAlertTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>>

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileBehaviors> getBehaviors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>>

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `metricsExportConfig`<sup>Optional</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig"></a>

```java
public IotSecurityProfileMetricsExportConfig getMetricsExportConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription"></a>

```java
public java.lang.String getSecurityProfileDescription();
```

- *Type:* java.lang.String

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `securityProfileName`<sup>Optional</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName"></a>

```java
public java.lang.String getSecurityProfileName();
```

- *Type:* java.lang.String

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>>

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `targetArns`<sup>Optional</sup> <a name="targetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns"></a>

```java
public java.util.List<java.lang.String> getTargetArns();
```

- *Type:* java.util.List<java.lang.String>

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

### IotSecurityProfileMetricsExportConfig <a name="IotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileMetricsExportConfig;

IotSecurityProfileMetricsExportConfig.builder()
//  .mqttTopic(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic">mqttTopic</a></code> | <code>java.lang.String</code> | The topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the role that grants permission to publish to mqtt topic. |

---

##### `mqttTopic`<sup>Optional</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic"></a>

```java
public java.lang.String getMqttTopic();
```

- *Type:* java.lang.String

The topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the role that grants permission to publish to mqtt topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileTags <a name="IotSecurityProfileTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileTags;

IotSecurityProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#key IotSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2List <a name="IotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAdditionalMetricsToRetainV2List;

new IotSecurityProfileAdditionalMetricsToRetainV2List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```java
public IotSecurityProfileAdditionalMetricsToRetainV2OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileAdditionalMetricsToRetainV2> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>>

---


### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference;

new IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName"></a>

```java
public void resetDimensionName()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput"></a>

```java
public java.lang.String getDimensionNameInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### IotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference;

new IotSecurityProfileAdditionalMetricsToRetainV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension">putMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric">resetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension">resetMetricDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDimension` <a name="putMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension"></a>

```java
public void putMetricDimension(IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `resetExportMetric` <a name="resetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric"></a>

```java
public void resetExportMetric()
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetricDimension` <a name="resetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension"></a>

```java
public void resetMetricDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput">exportMetricInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput">metricDimensionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">exportMetric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```java
public IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference getMetricDimension();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `exportMetricInput`<sup>Optional</sup> <a name="exportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput"></a>

```java
public java.lang.Boolean|IResolvable getExportMetricInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metricDimensionInput`<sup>Optional</sup> <a name="metricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput"></a>

```java
public IResolvable|IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension getMetricDimensionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```java
public java.lang.Boolean|IResolvable getExportMetric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileAdditionalMetricsToRetainV2 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### IotSecurityProfileAlertTargetsMap <a name="IotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAlertTargetsMap;

new IotSecurityProfileAlertTargetsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get"></a>

```java
public IotSecurityProfileAlertTargetsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, IotSecurityProfileAlertTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>>

---


### IotSecurityProfileAlertTargetsOutputReference <a name="IotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileAlertTargetsOutputReference;

new IotSecurityProfileAlertTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn">resetAlertTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertTargetArn` <a name="resetAlertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn"></a>

```java
public void resetAlertTargetArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput">alertTargetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">alertTargetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertTargetArnInput`<sup>Optional</sup> <a name="alertTargetArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput"></a>

```java
public java.lang.String getAlertTargetArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `alertTargetArn`<sup>Required</sup> <a name="alertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```java
public java.lang.String getAlertTargetArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileAlertTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>

---


### IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference;

new IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel"></a>

```java
public void resetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput"></a>

```java
public java.lang.String getConfidenceLevelInput();
```

- *Type:* java.lang.String

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaMlDetectionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### IotSecurityProfileBehaviorsCriteriaOutputReference <a name="IotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaOutputReference;

new IotSecurityProfileBehaviorsCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig">putMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold">putStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm">resetConsecutiveDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear">resetConsecutiveDatapointsToClear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig">resetMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold">resetStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlDetectionConfig` <a name="putMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig"></a>

```java
public void putMlDetectionConfig(IotSecurityProfileBehaviorsCriteriaMlDetectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `putStatisticalThreshold` <a name="putStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold"></a>

```java
public void putStatisticalThreshold(IotSecurityProfileBehaviorsCriteriaStatisticalThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue"></a>

```java
public void putValue(IotSecurityProfileBehaviorsCriteriaValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator"></a>

```java
public void resetComparisonOperator()
```

##### `resetConsecutiveDatapointsToAlarm` <a name="resetConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm"></a>

```java
public void resetConsecutiveDatapointsToAlarm()
```

##### `resetConsecutiveDatapointsToClear` <a name="resetConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear"></a>

```java
public void resetConsecutiveDatapointsToClear()
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetMlDetectionConfig` <a name="resetMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig"></a>

```java
public void resetMlDetectionConfig()
```

##### `resetStatisticalThreshold` <a name="resetStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold"></a>

```java
public void resetStatisticalThreshold()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">mlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">statisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput">consecutiveDatapointsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput">consecutiveDatapointsToClearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput">mlDetectionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput">statisticalThresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput">valueInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">consecutiveDatapointsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">consecutiveDatapointsToClear</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mlDetectionConfig`<sup>Required</sup> <a name="mlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```java
public IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference getMlDetectionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `statisticalThreshold`<sup>Required</sup> <a name="statisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```java
public IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference getStatisticalThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```java
public IotSecurityProfileBehaviorsCriteriaValueOutputReference getValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `consecutiveDatapointsToAlarmInput`<sup>Optional</sup> <a name="consecutiveDatapointsToAlarmInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput"></a>

```java
public java.lang.Number getConsecutiveDatapointsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveDatapointsToClearInput`<sup>Optional</sup> <a name="consecutiveDatapointsToClearInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput"></a>

```java
public java.lang.Number getConsecutiveDatapointsToClearInput();
```

- *Type:* java.lang.Number

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `mlDetectionConfigInput`<sup>Optional</sup> <a name="mlDetectionConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaMlDetectionConfig getMlDetectionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `statisticalThresholdInput`<sup>Optional</sup> <a name="statisticalThresholdInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaStatisticalThreshold getStatisticalThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaValue getValueInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `consecutiveDatapointsToAlarm`<sup>Required</sup> <a name="consecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```java
public java.lang.Number getConsecutiveDatapointsToAlarm();
```

- *Type:* java.lang.Number

---

##### `consecutiveDatapointsToClear`<sup>Required</sup> <a name="consecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```java
public java.lang.Number getConsecutiveDatapointsToClear();
```

- *Type:* java.lang.Number

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---


### IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference;

new IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic"></a>

```java
public void resetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaStatisticalThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### IotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="IotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsCriteriaValueOutputReference;

new IotSecurityProfileBehaviorsCriteriaValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers">resetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings">resetStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs"></a>

```java
public void resetCidrs()
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount"></a>

```java
public void resetCount()
```

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetNumbers` <a name="resetNumbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers"></a>

```java
public void resetNumbers()
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetStrings` <a name="resetStrings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings"></a>

```java
public void resetStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput">countInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput">numberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput">numbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput">stringsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">count</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">numbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">strings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput"></a>

```java
public java.util.List<java.lang.String> getCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput"></a>

```java
public java.lang.String getCountInput();
```

- *Type:* java.lang.String

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput"></a>

```java
public java.lang.Number getNumberInput();
```

- *Type:* java.lang.Number

---

##### `numbersInput`<sup>Optional</sup> <a name="numbersInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput"></a>

```java
public java.util.List<java.lang.Number> getNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `stringsInput`<sup>Optional</sup> <a name="stringsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput"></a>

```java
public java.util.List<java.lang.String> getStringsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```java
public java.util.List<java.lang.String> getCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```java
public java.lang.String getCount();
```

- *Type:* java.lang.String

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```java
public java.util.List<java.lang.Number> getNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```java
public java.util.List<java.lang.String> getStrings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteriaValue getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---


### IotSecurityProfileBehaviorsList <a name="IotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsList;

new IotSecurityProfileBehaviorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get"></a>

```java
public IotSecurityProfileBehaviorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileBehaviors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>>

---


### IotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="IotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsMetricDimensionOutputReference;

new IotSecurityProfileBehaviorsMetricDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName"></a>

```java
public void resetDimensionName()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput"></a>

```java
public java.lang.String getDimensionNameInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsMetricDimension getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---


### IotSecurityProfileBehaviorsOutputReference <a name="IotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileBehaviorsOutputReference;

new IotSecurityProfileBehaviorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension">putMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric">resetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension">resetMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts">resetSuppressAlerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria"></a>

```java
public void putCriteria(IotSecurityProfileBehaviorsCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `putMetricDimension` <a name="putMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension"></a>

```java
public void putMetricDimension(IotSecurityProfileBehaviorsMetricDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria"></a>

```java
public void resetCriteria()
```

##### `resetExportMetric` <a name="resetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric"></a>

```java
public void resetExportMetric()
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetricDimension` <a name="resetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension"></a>

```java
public void resetMetricDimension()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSuppressAlerts` <a name="resetSuppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts"></a>

```java
public void resetSuppressAlerts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput">exportMetricInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput">metricDimensionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput">suppressAlertsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric">exportMetric</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">suppressAlerts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```java
public IotSecurityProfileBehaviorsCriteriaOutputReference getCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```java
public IotSecurityProfileBehaviorsMetricDimensionOutputReference getMetricDimension();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsCriteria getCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `exportMetricInput`<sup>Optional</sup> <a name="exportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput"></a>

```java
public java.lang.Boolean|IResolvable getExportMetricInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metricDimensionInput`<sup>Optional</sup> <a name="metricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput"></a>

```java
public IResolvable|IotSecurityProfileBehaviorsMetricDimension getMetricDimensionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `suppressAlertsInput`<sup>Optional</sup> <a name="suppressAlertsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput"></a>

```java
public java.lang.Boolean|IResolvable getSuppressAlertsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```java
public java.lang.Boolean|IResolvable getExportMetric();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `suppressAlerts`<sup>Required</sup> <a name="suppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```java
public java.lang.Boolean|IResolvable getSuppressAlerts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileBehaviors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>

---


### IotSecurityProfileMetricsExportConfigOutputReference <a name="IotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileMetricsExportConfigOutputReference;

new IotSecurityProfileMetricsExportConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic">resetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMqttTopic` <a name="resetMqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic"></a>

```java
public void resetMqttTopic()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput">mqttTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">mqttTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mqttTopicInput`<sup>Optional</sup> <a name="mqttTopicInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput"></a>

```java
public java.lang.String getMqttTopicInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `mqttTopic`<sup>Required</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```java
public java.lang.String getMqttTopic();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileMetricsExportConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---


### IotSecurityProfileTagsList <a name="IotSecurityProfileTagsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileTagsList;

new IotSecurityProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get"></a>

```java
public IotSecurityProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotSecurityProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>>

---


### IotSecurityProfileTagsOutputReference <a name="IotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_security_profile.IotSecurityProfileTagsOutputReference;

new IotSecurityProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotSecurityProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>

---



