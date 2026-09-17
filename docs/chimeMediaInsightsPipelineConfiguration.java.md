# `chimeMediaInsightsPipelineConfiguration` Submodule <a name="`chimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaInsightsPipelineConfiguration <a name="ChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfiguration;

ChimeMediaInsightsPipelineConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .elements(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements>)
    .mediaInsightsPipelineConfigurationName(java.lang.String)
    .resourceAccessRoleArn(java.lang.String)
//  .realTimeAlertConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration)
//  .tags(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>></code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>java.lang.String</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>></code> | The tags associated with the configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.elements"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>>

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.mediaInsightsPipelineConfigurationName"></a>

- *Type:* java.lang.String

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.resourceAccessRoleArn"></a>

- *Type:* java.lang.String

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `realTimeAlertConfiguration`<sup>Optional</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.realTimeAlertConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>>

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements">putElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration">putRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration">resetRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements"></a>

```java
public void putElements(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putElements.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>>

---

##### `putRealTimeAlertConfiguration` <a name="putRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration"></a>

```java
public void putRealTimeAlertConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putRealTimeAlertConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>>

---

##### `resetRealTimeAlertConfiguration` <a name="resetRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetRealTimeAlertConfiguration"></a>

```java
public void resetRealTimeAlertConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfiguration;

ChimeMediaInsightsPipelineConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfiguration;

ChimeMediaInsightsPipelineConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfiguration;

ChimeMediaInsightsPipelineConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfiguration;

ChimeMediaInsightsPipelineConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeMediaInsightsPipelineConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeMediaInsightsPipelineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">mediaInsightsPipelineConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">mediaInsightsPipelineConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">updatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput">elementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput">mediaInsightsPipelineConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput">realTimeAlertConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput">resourceAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsList getElements();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList">ChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```java
public java.lang.String getMediaInsightsPipelineConfigurationArn();
```

- *Type:* java.lang.String

---

##### `mediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```java
public java.lang.String getMediaInsightsPipelineConfigurationId();
```

- *Type:* java.lang.String

---

##### `realTimeAlertConfiguration`<sup>Required</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference getRealTimeAlertConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```java
public ChimeMediaInsightsPipelineConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList">ChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```java
public java.lang.String getUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.elementsInput"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements> getElementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>>

---

##### `mediaInsightsPipelineConfigurationNameInput`<sup>Optional</sup> <a name="mediaInsightsPipelineConfigurationNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationNameInput"></a>

```java
public java.lang.String getMediaInsightsPipelineConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `realTimeAlertConfigurationInput`<sup>Optional</sup> <a name="realTimeAlertConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration getRealTimeAlertConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---

##### `resourceAccessRoleArnInput`<sup>Optional</sup> <a name="resourceAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArnInput"></a>

```java
public java.lang.String getResourceAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>>

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```java
public java.lang.String getMediaInsightsPipelineConfigurationName();
```

- *Type:* java.lang.String

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```java
public java.lang.String getResourceAccessRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaInsightsPipelineConfigurationConfig <a name="ChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationConfig;

ChimeMediaInsightsPipelineConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .elements(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements>)
    .mediaInsightsPipelineConfigurationName(java.lang.String)
    .resourceAccessRoleArn(java.lang.String)
//  .realTimeAlertConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration)
//  .tags(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>></code> | The elements in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>java.lang.String</code> | The name of the media insights pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the role used by the service to access Amazon Web Services resources. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>></code> | The tags associated with the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.elements"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements> getElements();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>>

The elements in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#elements ChimeMediaInsightsPipelineConfiguration#elements}

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.mediaInsightsPipelineConfigurationName"></a>

```java
public java.lang.String getMediaInsightsPipelineConfigurationName();
```

- *Type:* java.lang.String

The name of the media insights pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#media_insights_pipeline_configuration_name ChimeMediaInsightsPipelineConfiguration#media_insights_pipeline_configuration_name}

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.resourceAccessRoleArn"></a>

```java
public java.lang.String getResourceAccessRoleArn();
```

- *Type:* java.lang.String

The ARN of the role used by the service to access Amazon Web Services resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#resource_access_role_arn ChimeMediaInsightsPipelineConfiguration#resource_access_role_arn}

---

##### `realTimeAlertConfiguration`<sup>Optional</sup> <a name="realTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.realTimeAlertConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration getRealTimeAlertConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#real_time_alert_configuration ChimeMediaInsightsPipelineConfiguration#real_time_alert_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>>

The tags associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#tags ChimeMediaInsightsPipelineConfiguration#tags}

---

### ChimeMediaInsightsPipelineConfigurationElements <a name="ChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElements;

ChimeMediaInsightsPipelineConfigurationElements.builder()
    .type(java.lang.String)
//  .amazonTranscribeCallAnalyticsProcessorConfiguration(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration)
//  .amazonTranscribeProcessorConfiguration(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration)
//  .kinesisDataStreamSinkConfiguration(ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration)
//  .s3RecordingSinkConfiguration(ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type">type</a></code> | <code>java.lang.String</code> | The element type. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The element type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration getAmazonTranscribeCallAnalyticsProcessorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}.

---

##### `amazonTranscribeProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.amazonTranscribeProcessorConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration getAmazonTranscribeProcessorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimeMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}.

---

##### `kinesisDataStreamSinkConfiguration`<sup>Optional</sup> <a name="kinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.kinesisDataStreamSinkConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration getKinesisDataStreamSinkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimeMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}.

---

##### `s3RecordingSinkConfiguration`<sup>Optional</sup> <a name="s3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements.property.s3RecordingSinkConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration getS3RecordingSinkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimeMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}.

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;

ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.builder()
//  .callAnalyticsStreamCategories(java.util.List<java.lang.String>)
//  .contentIdentificationType(java.lang.String)
//  .contentRedactionType(java.lang.String)
//  .enablePartialResultsStabilization(java.lang.Boolean|IResolvable)
//  .filterPartialResults(java.lang.Boolean|IResolvable)
//  .languageCode(java.lang.String)
//  .languageModelName(java.lang.String)
//  .partialResultsStability(java.lang.String)
//  .piiEntityTypes(java.lang.String)
//  .postCallAnalyticsSettings(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings)
//  .vocabularyFilterMethod(java.lang.String)
//  .vocabularyFilterName(java.lang.String)
//  .vocabularyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>java.util.List<java.lang.String></code> | The categories to send to the insights target. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code>java.lang.String</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code>java.lang.String</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language code in the configuration. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>java.lang.String</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code>java.lang.String</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>java.lang.String</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>java.lang.String</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>java.lang.String</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | The name of the custom vocabulary. |

---

##### `callAnalyticsStreamCategories`<sup>Optional</sup> <a name="callAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories"></a>

```java
public java.util.List<java.lang.String> getCallAnalyticsStreamCategories();
```

- *Type:* java.util.List<java.lang.String>

The categories to send to the insights target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#call_analytics_stream_categories ChimeMediaInsightsPipelineConfiguration#call_analytics_stream_categories}

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType"></a>

```java
public java.lang.String getContentIdentificationType();
```

- *Type:* java.lang.String

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType"></a>

```java
public java.lang.String getContentRedactionType();
```

- *Type:* java.lang.String

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language code in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName"></a>

```java
public java.lang.String getLanguageModelName();
```

- *Type:* java.lang.String

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability"></a>

```java
public java.lang.String getPartialResultsStability();
```

- *Type:* java.lang.String

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes"></a>

```java
public java.lang.String getPiiEntityTypes();
```

- *Type:* java.lang.String

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `postCallAnalyticsSettings`<sup>Optional</sup> <a name="postCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings getPostCallAnalyticsSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#post_call_analytics_settings ChimeMediaInsightsPipelineConfiguration#post_call_analytics_settings}.

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod"></a>

```java
public java.lang.String getVocabularyFilterMethod();
```

- *Type:* java.lang.String

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName"></a>

```java
public java.lang.String getVocabularyFilterName();
```

- *Type:* java.lang.String

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;

ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.builder()
//  .contentRedactionOutput(java.lang.String)
//  .dataAccessRoleArn(java.lang.String)
//  .outputEncryptionKmsKeyId(java.lang.String)
//  .outputLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code>java.lang.String</code> | The content redaction output settings. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the role used by Transcribe to upload post-call analysis. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId">outputEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | The URL of the Amazon S3 bucket for post-call data. |

---

##### `contentRedactionOutput`<sup>Optional</sup> <a name="contentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.contentRedactionOutput"></a>

```java
public java.lang.String getContentRedactionOutput();
```

- *Type:* java.lang.String

The content redaction output settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_output ChimeMediaInsightsPipelineConfiguration#content_redaction_output}

---

##### `dataAccessRoleArn`<sup>Optional</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

The ARN of the role used by Transcribe to upload post-call analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#data_access_role_arn ChimeMediaInsightsPipelineConfiguration#data_access_role_arn}

---

##### `outputEncryptionKmsKeyId`<sup>Optional</sup> <a name="outputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputEncryptionKmsKeyId"></a>

```java
public java.lang.String getOutputEncryptionKmsKeyId();
```

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimeMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

The URL of the Amazon S3 bucket for post-call data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#output_location ChimeMediaInsightsPipelineConfiguration#output_location}

---

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;

ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.builder()
//  .contentIdentificationType(java.lang.String)
//  .contentRedactionType(java.lang.String)
//  .enablePartialResultsStabilization(java.lang.Boolean|IResolvable)
//  .filterPartialResults(java.lang.Boolean|IResolvable)
//  .identifyLanguage(java.lang.Boolean|IResolvable)
//  .identifyMultipleLanguages(java.lang.Boolean|IResolvable)
//  .languageCode(java.lang.String)
//  .languageModelName(java.lang.String)
//  .languageOptions(java.lang.String)
//  .partialResultsStability(java.lang.String)
//  .piiEntityTypes(java.lang.String)
//  .preferredLanguage(java.lang.String)
//  .showSpeakerLabel(java.lang.Boolean|IResolvable)
//  .vocabularyFilterMethod(java.lang.String)
//  .vocabularyFilterName(java.lang.String)
//  .vocabularyFilterNames(java.lang.String)
//  .vocabularyName(java.lang.String)
//  .vocabularyNames(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code>java.lang.String</code> | Labels all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code>java.lang.String</code> | Redacts all PII identified in the transcript. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables partial result stabilization. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, partial results are filtered out. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage">identifyLanguage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Turns language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages">identifyMultipleLanguages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Turns multiple language identification on or off. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>java.lang.String</code> | The name of the custom language model. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions">languageOptions</a></code> | <code>java.lang.String</code> | The language options for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code>java.lang.String</code> | The level of stability for partial results. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>java.lang.String</code> | The types of PII to redact. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | The preferred language for transcription. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables speaker partitioning. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>java.lang.String</code> | The vocabulary filtering method. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>java.lang.String</code> | The name of the custom vocabulary filter. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames">vocabularyFilterNames</a></code> | <code>java.lang.String</code> | The names of the custom vocabulary filters. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | The name of the custom vocabulary. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames">vocabularyNames</a></code> | <code>java.lang.String</code> | The names of the custom vocabularies. |

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentIdentificationType"></a>

```java
public java.lang.String getContentIdentificationType();
```

- *Type:* java.lang.String

Labels all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_identification_type ChimeMediaInsightsPipelineConfiguration#content_identification_type}

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.contentRedactionType"></a>

```java
public java.lang.String getContentRedactionType();
```

- *Type:* java.lang.String

Redacts all PII identified in the transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#content_redaction_type ChimeMediaInsightsPipelineConfiguration#content_redaction_type}

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables partial result stabilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimeMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.filterPartialResults"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, partial results are filtered out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#filter_partial_results ChimeMediaInsightsPipelineConfiguration#filter_partial_results}

---

##### `identifyLanguage`<sup>Optional</sup> <a name="identifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyLanguage"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyLanguage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Turns language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_language ChimeMediaInsightsPipelineConfiguration#identify_language}

---

##### `identifyMultipleLanguages`<sup>Optional</sup> <a name="identifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.identifyMultipleLanguages"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyMultipleLanguages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Turns multiple language identification on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#identify_multiple_languages ChimeMediaInsightsPipelineConfiguration#identify_multiple_languages}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_code ChimeMediaInsightsPipelineConfiguration#language_code}

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageModelName"></a>

```java
public java.lang.String getLanguageModelName();
```

- *Type:* java.lang.String

The name of the custom language model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_model_name ChimeMediaInsightsPipelineConfiguration#language_model_name}

---

##### `languageOptions`<sup>Optional</sup> <a name="languageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.languageOptions"></a>

```java
public java.lang.String getLanguageOptions();
```

- *Type:* java.lang.String

The language options for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#language_options ChimeMediaInsightsPipelineConfiguration#language_options}

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.partialResultsStability"></a>

```java
public java.lang.String getPartialResultsStability();
```

- *Type:* java.lang.String

The level of stability for partial results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#partial_results_stability ChimeMediaInsightsPipelineConfiguration#partial_results_stability}

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.piiEntityTypes"></a>

```java
public java.lang.String getPiiEntityTypes();
```

- *Type:* java.lang.String

The types of PII to redact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#pii_entity_types ChimeMediaInsightsPipelineConfiguration#pii_entity_types}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

The preferred language for transcription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#preferred_language ChimeMediaInsightsPipelineConfiguration#preferred_language}

---

##### `showSpeakerLabel`<sup>Optional</sup> <a name="showSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.showSpeakerLabel"></a>

```java
public java.lang.Boolean|IResolvable getShowSpeakerLabel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables speaker partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#show_speaker_label ChimeMediaInsightsPipelineConfiguration#show_speaker_label}

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod"></a>

```java
public java.lang.String getVocabularyFilterMethod();
```

- *Type:* java.lang.String

The vocabulary filtering method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_method ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_method}

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterName"></a>

```java
public java.lang.String getVocabularyFilterName();
```

- *Type:* java.lang.String

The name of the custom vocabulary filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_name ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_name}

---

##### `vocabularyFilterNames`<sup>Optional</sup> <a name="vocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyFilterNames"></a>

```java
public java.lang.String getVocabularyFilterNames();
```

- *Type:* java.lang.String

The names of the custom vocabulary filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_filter_names ChimeMediaInsightsPipelineConfiguration#vocabulary_filter_names}

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

The name of the custom vocabulary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_name ChimeMediaInsightsPipelineConfiguration#vocabulary_name}

---

##### `vocabularyNames`<sup>Optional</sup> <a name="vocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.property.vocabularyNames"></a>

```java
public java.lang.String getVocabularyNames();
```

- *Type:* java.lang.String

The names of the custom vocabularies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#vocabulary_names ChimeMediaInsightsPipelineConfiguration#vocabulary_names}

---

### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;

ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.builder()
//  .insightsTarget(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>java.lang.String</code> | The ARN of the Kinesis Data Stream sink. |

---

##### `insightsTarget`<sup>Optional</sup> <a name="insightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.property.insightsTarget"></a>

```java
public java.lang.String getInsightsTarget();
```

- *Type:* java.lang.String

The ARN of the Kinesis Data Stream sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#insights_target ChimeMediaInsightsPipelineConfiguration#insights_target}

---

### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;

ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.builder()
//  .destination(java.lang.String)
//  .recordingFileFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination">destination</a></code> | <code>java.lang.String</code> | The default URI of the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat">recordingFileFormat</a></code> | <code>java.lang.String</code> | The recording file format. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The default URI of the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#destination ChimeMediaInsightsPipelineConfiguration#destination}

---

##### `recordingFileFormat`<sup>Optional</sup> <a name="recordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.property.recordingFileFormat"></a>

```java
public java.lang.String getRecordingFileFormat();
```

- *Type:* java.lang.String

The recording file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#recording_file_format ChimeMediaInsightsPipelineConfiguration#recording_file_format}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;

ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.builder()
//  .disabled(java.lang.Boolean|IResolvable)
//  .rules(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Turns off real-time alerts. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>></code> | The rules in the alert. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Turns off real-time alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#disabled ChimeMediaInsightsPipelineConfiguration#disabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.property.rules"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>>

The rules in the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rules ChimeMediaInsightsPipelineConfiguration#rules}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules;

ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.builder()
//  .issueDetectionConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration)
//  .keywordMatchConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration)
//  .sentimentConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type">type</a></code> | <code>java.lang.String</code> | The type of alert rule. |

---

##### `issueDetectionConfiguration`<sup>Optional</sup> <a name="issueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.issueDetectionConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration getIssueDetectionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#issue_detection_configuration ChimeMediaInsightsPipelineConfiguration#issue_detection_configuration}.

---

##### `keywordMatchConfiguration`<sup>Optional</sup> <a name="keywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.keywordMatchConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration getKeywordMatchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keyword_match_configuration ChimeMediaInsightsPipelineConfiguration#keyword_match_configuration}.

---

##### `sentimentConfiguration`<sup>Optional</sup> <a name="sentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.sentimentConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration getSentimentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_configuration ChimeMediaInsightsPipelineConfiguration#sentiment_configuration}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of alert rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#type ChimeMediaInsightsPipelineConfiguration#type}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;

ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.builder()
//  .ruleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The name of the issue detection rule. |

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The name of the issue detection rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;

ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.builder()
//  .keywords(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean|IResolvable)
//  .ruleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords">keywords</a></code> | <code>java.util.List<java.lang.String></code> | The keywords or phrases to match. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Matches keywords on their presence or absence. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The name of the keyword match rule. |

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.keywords"></a>

```java
public java.util.List<java.lang.String> getKeywords();
```

- *Type:* java.util.List<java.lang.String>

The keywords or phrases to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#keywords ChimeMediaInsightsPipelineConfiguration#keywords}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Matches keywords on their presence or absence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#negate ChimeMediaInsightsPipelineConfiguration#negate}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The name of the keyword match rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;

ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.builder()
//  .ruleName(java.lang.String)
//  .sentimentType(java.lang.String)
//  .timePeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The name of the sentiment rule. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType">sentimentType</a></code> | <code>java.lang.String</code> | The type of sentiment. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod">timePeriod</a></code> | <code>java.lang.Number</code> | The analysis interval in seconds. |

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The name of the sentiment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#rule_name ChimeMediaInsightsPipelineConfiguration#rule_name}

---

##### `sentimentType`<sup>Optional</sup> <a name="sentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.sentimentType"></a>

```java
public java.lang.String getSentimentType();
```

- *Type:* java.lang.String

The type of sentiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#sentiment_type ChimeMediaInsightsPipelineConfiguration#sentiment_type}

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.property.timePeriod"></a>

```java
public java.lang.Number getTimePeriod();
```

- *Type:* java.lang.Number

The analysis interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#time_period ChimeMediaInsightsPipelineConfiguration#time_period}

---

### ChimeMediaInsightsPipelineConfigurationTags <a name="ChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationTags;

ChimeMediaInsightsPipelineConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#key ChimeMediaInsightsPipelineConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_media_insights_pipeline_configuration#value ChimeMediaInsightsPipelineConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings">putPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories">resetCallAnalyticsStreamCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType">resetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType">resetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">resetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults">resetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName">resetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability">resetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes">resetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings">resetPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod">resetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName">resetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName">resetVocabularyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostCallAnalyticsSettings` <a name="putPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings"></a>

```java
public void putPostCallAnalyticsSettings(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.putPostCallAnalyticsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `resetCallAnalyticsStreamCategories` <a name="resetCallAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetCallAnalyticsStreamCategories"></a>

```java
public void resetCallAnalyticsStreamCategories()
```

##### `resetContentIdentificationType` <a name="resetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```java
public void resetContentIdentificationType()
```

##### `resetContentRedactionType` <a name="resetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```java
public void resetContentRedactionType()
```

##### `resetEnablePartialResultsStabilization` <a name="resetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```java
public void resetEnablePartialResultsStabilization()
```

##### `resetFilterPartialResults` <a name="resetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```java
public void resetFilterPartialResults()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetLanguageModelName` <a name="resetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```java
public void resetLanguageModelName()
```

##### `resetPartialResultsStability` <a name="resetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```java
public void resetPartialResultsStability()
```

##### `resetPiiEntityTypes` <a name="resetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```java
public void resetPiiEntityTypes()
```

##### `resetPostCallAnalyticsSettings` <a name="resetPostCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetPostCallAnalyticsSettings"></a>

```java
public void resetPostCallAnalyticsSettings()
```

##### `resetVocabularyFilterMethod` <a name="resetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```java
public void resetVocabularyFilterMethod()
```

##### `resetVocabularyFilterName` <a name="resetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```java
public void resetVocabularyFilterName()
```

##### `resetVocabularyName` <a name="resetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resetVocabularyName"></a>

```java
public void resetVocabularyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput">callAnalyticsStreamCategoriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">contentIdentificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput">contentRedactionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enablePartialResultsStabilizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput">filterPartialResultsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput">languageModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partialResultsStabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput">piiEntityTypesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput">postCallAnalyticsSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabularyFilterMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postCallAnalyticsSettings`<sup>Required</sup> <a name="postCallAnalyticsSettings" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference getPostCallAnalyticsSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `callAnalyticsStreamCategoriesInput`<sup>Optional</sup> <a name="callAnalyticsStreamCategoriesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategoriesInput"></a>

```java
public java.util.List<java.lang.String> getCallAnalyticsStreamCategoriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentIdentificationTypeInput`<sup>Optional</sup> <a name="contentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```java
public java.lang.String getContentIdentificationTypeInput();
```

- *Type:* java.lang.String

---

##### `contentRedactionTypeInput`<sup>Optional</sup> <a name="contentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```java
public java.lang.String getContentRedactionTypeInput();
```

- *Type:* java.lang.String

---

##### `enablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="enablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterPartialResultsInput`<sup>Optional</sup> <a name="filterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResultsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `languageModelNameInput`<sup>Optional</sup> <a name="languageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```java
public java.lang.String getLanguageModelNameInput();
```

- *Type:* java.lang.String

---

##### `partialResultsStabilityInput`<sup>Optional</sup> <a name="partialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```java
public java.lang.String getPartialResultsStabilityInput();
```

- *Type:* java.lang.String

---

##### `piiEntityTypesInput`<sup>Optional</sup> <a name="piiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```java
public java.lang.String getPiiEntityTypesInput();
```

- *Type:* java.lang.String

---

##### `postCallAnalyticsSettingsInput`<sup>Optional</sup> <a name="postCallAnalyticsSettingsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettingsInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings getPostCallAnalyticsSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---

##### `vocabularyFilterMethodInput`<sup>Optional</sup> <a name="vocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```java
public java.lang.String getVocabularyFilterMethodInput();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```java
public java.lang.String getVocabularyFilterNameInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```java
public java.lang.String getVocabularyNameInput();
```

- *Type:* java.lang.String

---

##### `callAnalyticsStreamCategories`<sup>Required</sup> <a name="callAnalyticsStreamCategories" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```java
public java.util.List<java.lang.String> getCallAnalyticsStreamCategories();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```java
public java.lang.String getContentIdentificationType();
```

- *Type:* java.lang.String

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```java
public java.lang.String getContentRedactionType();
```

- *Type:* java.lang.String

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```java
public java.lang.String getLanguageModelName();
```

- *Type:* java.lang.String

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```java
public java.lang.String getPartialResultsStability();
```

- *Type:* java.lang.String

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```java
public java.lang.String getPiiEntityTypes();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```java
public java.lang.String getVocabularyFilterMethod();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```java
public java.lang.String getVocabularyFilterName();
```

- *Type:* java.lang.String

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput">resetContentRedactionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn">resetDataAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId">resetOutputEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentRedactionOutput` <a name="resetContentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetContentRedactionOutput"></a>

```java
public void resetContentRedactionOutput()
```

##### `resetDataAccessRoleArn` <a name="resetDataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetDataAccessRoleArn"></a>

```java
public void resetDataAccessRoleArn()
```

##### `resetOutputEncryptionKmsKeyId` <a name="resetOutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputEncryptionKmsKeyId"></a>

```java
public void resetOutputEncryptionKmsKeyId()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput">contentRedactionOutputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput">outputEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">outputEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">outputLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentRedactionOutputInput`<sup>Optional</sup> <a name="contentRedactionOutputInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutputInput"></a>

```java
public java.lang.String getContentRedactionOutputInput();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArnInput"></a>

```java
public java.lang.String getDataAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `outputEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="outputEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getOutputEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocationInput"></a>

```java
public java.lang.String getOutputLocationInput();
```

- *Type:* java.lang.String

---

##### `contentRedactionOutput`<sup>Required</sup> <a name="contentRedactionOutput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```java
public java.lang.String getContentRedactionOutput();
```

- *Type:* java.lang.String

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```java
public java.lang.String getDataAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `outputEncryptionKmsKeyId`<sup>Required</sup> <a name="outputEncryptionKmsKeyId" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```java
public java.lang.String getOutputEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```java
public java.lang.String getOutputLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType">resetContentIdentificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType">resetContentRedactionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization">resetEnablePartialResultsStabilization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults">resetFilterPartialResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage">resetIdentifyLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages">resetIdentifyMultipleLanguages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName">resetLanguageModelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions">resetLanguageOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability">resetPartialResultsStability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes">resetPiiEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel">resetShowSpeakerLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod">resetVocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName">resetVocabularyFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames">resetVocabularyFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName">resetVocabularyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames">resetVocabularyNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentIdentificationType` <a name="resetContentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentIdentificationType"></a>

```java
public void resetContentIdentificationType()
```

##### `resetContentRedactionType` <a name="resetContentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetContentRedactionType"></a>

```java
public void resetContentRedactionType()
```

##### `resetEnablePartialResultsStabilization` <a name="resetEnablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetEnablePartialResultsStabilization"></a>

```java
public void resetEnablePartialResultsStabilization()
```

##### `resetFilterPartialResults` <a name="resetFilterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetFilterPartialResults"></a>

```java
public void resetFilterPartialResults()
```

##### `resetIdentifyLanguage` <a name="resetIdentifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyLanguage"></a>

```java
public void resetIdentifyLanguage()
```

##### `resetIdentifyMultipleLanguages` <a name="resetIdentifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetIdentifyMultipleLanguages"></a>

```java
public void resetIdentifyMultipleLanguages()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetLanguageModelName` <a name="resetLanguageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageModelName"></a>

```java
public void resetLanguageModelName()
```

##### `resetLanguageOptions` <a name="resetLanguageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetLanguageOptions"></a>

```java
public void resetLanguageOptions()
```

##### `resetPartialResultsStability` <a name="resetPartialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPartialResultsStability"></a>

```java
public void resetPartialResultsStability()
```

##### `resetPiiEntityTypes` <a name="resetPiiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPiiEntityTypes"></a>

```java
public void resetPiiEntityTypes()
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetPreferredLanguage"></a>

```java
public void resetPreferredLanguage()
```

##### `resetShowSpeakerLabel` <a name="resetShowSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetShowSpeakerLabel"></a>

```java
public void resetShowSpeakerLabel()
```

##### `resetVocabularyFilterMethod` <a name="resetVocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterMethod"></a>

```java
public void resetVocabularyFilterMethod()
```

##### `resetVocabularyFilterName` <a name="resetVocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterName"></a>

```java
public void resetVocabularyFilterName()
```

##### `resetVocabularyFilterNames` <a name="resetVocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyFilterNames"></a>

```java
public void resetVocabularyFilterNames()
```

##### `resetVocabularyName` <a name="resetVocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyName"></a>

```java
public void resetVocabularyName()
```

##### `resetVocabularyNames` <a name="resetVocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resetVocabularyNames"></a>

```java
public void resetVocabularyNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput">contentIdentificationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput">contentRedactionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput">enablePartialResultsStabilizationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput">filterPartialResultsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput">identifyLanguageInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput">identifyMultipleLanguagesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput">languageModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput">languageOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput">partialResultsStabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput">piiEntityTypesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput">showSpeakerLabelInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput">vocabularyFilterMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput">vocabularyFilterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput">vocabularyFilterNamesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput">vocabularyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput">vocabularyNamesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">contentIdentificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">contentRedactionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">filterPartialResults</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">identifyLanguage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">identifyMultipleLanguages</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">languageModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">languageOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">partialResultsStability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">piiEntityTypes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">vocabularyFilterNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">vocabularyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">vocabularyNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentIdentificationTypeInput`<sup>Optional</sup> <a name="contentIdentificationTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationTypeInput"></a>

```java
public java.lang.String getContentIdentificationTypeInput();
```

- *Type:* java.lang.String

---

##### `contentRedactionTypeInput`<sup>Optional</sup> <a name="contentRedactionTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionTypeInput"></a>

```java
public java.lang.String getContentRedactionTypeInput();
```

- *Type:* java.lang.String

---

##### `enablePartialResultsStabilizationInput`<sup>Optional</sup> <a name="enablePartialResultsStabilizationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilizationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilizationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterPartialResultsInput`<sup>Optional</sup> <a name="filterPartialResultsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResultsInput"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResultsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identifyLanguageInput`<sup>Optional</sup> <a name="identifyLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguageInput"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyLanguageInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identifyMultipleLanguagesInput`<sup>Optional</sup> <a name="identifyMultipleLanguagesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguagesInput"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyMultipleLanguagesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `languageModelNameInput`<sup>Optional</sup> <a name="languageModelNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelNameInput"></a>

```java
public java.lang.String getLanguageModelNameInput();
```

- *Type:* java.lang.String

---

##### `languageOptionsInput`<sup>Optional</sup> <a name="languageOptionsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptionsInput"></a>

```java
public java.lang.String getLanguageOptionsInput();
```

- *Type:* java.lang.String

---

##### `partialResultsStabilityInput`<sup>Optional</sup> <a name="partialResultsStabilityInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStabilityInput"></a>

```java
public java.lang.String getPartialResultsStabilityInput();
```

- *Type:* java.lang.String

---

##### `piiEntityTypesInput`<sup>Optional</sup> <a name="piiEntityTypesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypesInput"></a>

```java
public java.lang.String getPiiEntityTypesInput();
```

- *Type:* java.lang.String

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguageInput"></a>

```java
public java.lang.String getPreferredLanguageInput();
```

- *Type:* java.lang.String

---

##### `showSpeakerLabelInput`<sup>Optional</sup> <a name="showSpeakerLabelInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabelInput"></a>

```java
public java.lang.Boolean|IResolvable getShowSpeakerLabelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vocabularyFilterMethodInput`<sup>Optional</sup> <a name="vocabularyFilterMethodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethodInput"></a>

```java
public java.lang.String getVocabularyFilterMethodInput();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterNameInput`<sup>Optional</sup> <a name="vocabularyFilterNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNameInput"></a>

```java
public java.lang.String getVocabularyFilterNameInput();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterNamesInput`<sup>Optional</sup> <a name="vocabularyFilterNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNamesInput"></a>

```java
public java.lang.String getVocabularyFilterNamesInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNameInput`<sup>Optional</sup> <a name="vocabularyNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNameInput"></a>

```java
public java.lang.String getVocabularyNameInput();
```

- *Type:* java.lang.String

---

##### `vocabularyNamesInput`<sup>Optional</sup> <a name="vocabularyNamesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNamesInput"></a>

```java
public java.lang.String getVocabularyNamesInput();
```

- *Type:* java.lang.String

---

##### `contentIdentificationType`<sup>Required</sup> <a name="contentIdentificationType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```java
public java.lang.String getContentIdentificationType();
```

- *Type:* java.lang.String

---

##### `contentRedactionType`<sup>Required</sup> <a name="contentRedactionType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```java
public java.lang.String getContentRedactionType();
```

- *Type:* java.lang.String

---

##### `enablePartialResultsStabilization`<sup>Required</sup> <a name="enablePartialResultsStabilization" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```java
public java.lang.Boolean|IResolvable getEnablePartialResultsStabilization();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterPartialResults`<sup>Required</sup> <a name="filterPartialResults" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```java
public java.lang.Boolean|IResolvable getFilterPartialResults();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identifyLanguage`<sup>Required</sup> <a name="identifyLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyLanguage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `identifyMultipleLanguages`<sup>Required</sup> <a name="identifyMultipleLanguages" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```java
public java.lang.Boolean|IResolvable getIdentifyMultipleLanguages();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `languageModelName`<sup>Required</sup> <a name="languageModelName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```java
public java.lang.String getLanguageModelName();
```

- *Type:* java.lang.String

---

##### `languageOptions`<sup>Required</sup> <a name="languageOptions" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```java
public java.lang.String getLanguageOptions();
```

- *Type:* java.lang.String

---

##### `partialResultsStability`<sup>Required</sup> <a name="partialResultsStability" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```java
public java.lang.String getPartialResultsStability();
```

- *Type:* java.lang.String

---

##### `piiEntityTypes`<sup>Required</sup> <a name="piiEntityTypes" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```java
public java.lang.String getPiiEntityTypes();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `showSpeakerLabel`<sup>Required</sup> <a name="showSpeakerLabel" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```java
public java.lang.Boolean|IResolvable getShowSpeakerLabel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vocabularyFilterMethod`<sup>Required</sup> <a name="vocabularyFilterMethod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```java
public java.lang.String getVocabularyFilterMethod();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```java
public java.lang.String getVocabularyFilterName();
```

- *Type:* java.lang.String

---

##### `vocabularyFilterNames`<sup>Required</sup> <a name="vocabularyFilterNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```java
public java.lang.String getVocabularyFilterNames();
```

- *Type:* java.lang.String

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```java
public java.lang.String getVocabularyName();
```

- *Type:* java.lang.String

---

##### `vocabularyNames`<sup>Required</sup> <a name="vocabularyNames" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```java
public java.lang.String getVocabularyNames();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget">resetInsightsTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInsightsTarget` <a name="resetInsightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resetInsightsTarget"></a>

```java
public void resetInsightsTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput">insightsTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">insightsTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insightsTargetInput`<sup>Optional</sup> <a name="insightsTargetInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTargetInput"></a>

```java
public java.lang.String getInsightsTargetInput();
```

- *Type:* java.lang.String

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```java
public java.lang.String getInsightsTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsList <a name="ChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsList;

new ChimeMediaInsightsPipelineConfigurationElementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationElements> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>>

---


### ChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration">putAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration">putAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration">putKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration">putS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration">resetAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration">resetAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration">resetKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration">resetS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="putAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```java
public void putAmazonTranscribeCallAnalyticsProcessorConfiguration(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeCallAnalyticsProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `putAmazonTranscribeProcessorConfiguration` <a name="putAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration"></a>

```java
public void putAmazonTranscribeProcessorConfiguration(ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putAmazonTranscribeProcessorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `putKinesisDataStreamSinkConfiguration` <a name="putKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration"></a>

```java
public void putKinesisDataStreamSinkConfiguration(ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putKinesisDataStreamSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `putS3RecordingSinkConfiguration` <a name="putS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration"></a>

```java
public void putS3RecordingSinkConfiguration(ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.putS3RecordingSinkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `resetAmazonTranscribeCallAnalyticsProcessorConfiguration` <a name="resetAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```java
public void resetAmazonTranscribeCallAnalyticsProcessorConfiguration()
```

##### `resetAmazonTranscribeProcessorConfiguration` <a name="resetAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetAmazonTranscribeProcessorConfiguration"></a>

```java
public void resetAmazonTranscribeProcessorConfiguration()
```

##### `resetKinesisDataStreamSinkConfiguration` <a name="resetKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetKinesisDataStreamSinkConfiguration"></a>

```java
public void resetKinesisDataStreamSinkConfiguration()
```

##### `resetS3RecordingSinkConfiguration` <a name="resetS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.resetS3RecordingSinkConfiguration"></a>

```java
public void resetS3RecordingSinkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput">amazonTranscribeCallAnalyticsProcessorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput">amazonTranscribeProcessorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput">kinesisDataStreamSinkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput">s3RecordingSinkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference getAmazonTranscribeCallAnalyticsProcessorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `amazonTranscribeProcessorConfiguration`<sup>Required</sup> <a name="amazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference getAmazonTranscribeProcessorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `kinesisDataStreamSinkConfiguration`<sup>Required</sup> <a name="kinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference getKinesisDataStreamSinkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `s3RecordingSinkConfiguration`<sup>Required</sup> <a name="s3RecordingSinkConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference getS3RecordingSinkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `amazonTranscribeCallAnalyticsProcessorConfigurationInput`<sup>Optional</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration getAmazonTranscribeCallAnalyticsProcessorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `amazonTranscribeProcessorConfigurationInput`<sup>Optional</sup> <a name="amazonTranscribeProcessorConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration getAmazonTranscribeProcessorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">ChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---

##### `kinesisDataStreamSinkConfigurationInput`<sup>Optional</sup> <a name="kinesisDataStreamSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration getKinesisDataStreamSinkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---

##### `s3RecordingSinkConfigurationInput`<sup>Optional</sup> <a name="s3RecordingSinkConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration getS3RecordingSinkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElements">ChimeMediaInsightsPipelineConfigurationElements</a>

---


### ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat">resetRecordingFileFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetRecordingFileFormat` <a name="resetRecordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resetRecordingFileFormat"></a>

```java
public void resetRecordingFileFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput">recordingFileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">recordingFileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `recordingFileFormatInput`<sup>Optional</sup> <a name="recordingFileFormatInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormatInput"></a>

```java
public java.lang.String getRecordingFileFormatInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `recordingFileFormat`<sup>Required</sup> <a name="recordingFileFormat" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```java
public java.lang.String getRecordingFileFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">ChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords">resetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeywords` <a name="resetKeywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetKeywords"></a>

```java
public void resetKeywords()
```

##### `resetNegate` <a name="resetNegate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput">keywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">keywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywordsInput"></a>

```java
public java.util.List<java.lang.String> getKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negateInput"></a>

```java
public java.lang.Boolean|IResolvable getNegateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```java
public java.util.List<java.lang.String> getKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```java
public java.lang.Boolean|IResolvable getNegate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration">putIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration">putKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration">putSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration">resetIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration">resetKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration">resetSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIssueDetectionConfiguration` <a name="putIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration"></a>

```java
public void putIssueDetectionConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putIssueDetectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `putKeywordMatchConfiguration` <a name="putKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration"></a>

```java
public void putKeywordMatchConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putKeywordMatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `putSentimentConfiguration` <a name="putSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration"></a>

```java
public void putSentimentConfiguration(ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.putSentimentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `resetIssueDetectionConfiguration` <a name="resetIssueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetIssueDetectionConfiguration"></a>

```java
public void resetIssueDetectionConfiguration()
```

##### `resetKeywordMatchConfiguration` <a name="resetKeywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetKeywordMatchConfiguration"></a>

```java
public void resetKeywordMatchConfiguration()
```

##### `resetSentimentConfiguration` <a name="resetSentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetSentimentConfiguration"></a>

```java
public void resetSentimentConfiguration()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput">issueDetectionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput">keywordMatchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput">sentimentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issueDetectionConfiguration`<sup>Required</sup> <a name="issueDetectionConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference getIssueDetectionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `keywordMatchConfiguration`<sup>Required</sup> <a name="keywordMatchConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference getKeywordMatchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `sentimentConfiguration`<sup>Required</sup> <a name="sentimentConfiguration" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```java
public ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference getSentimentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `issueDetectionConfigurationInput`<sup>Optional</sup> <a name="issueDetectionConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration getIssueDetectionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---

##### `keywordMatchConfigurationInput`<sup>Optional</sup> <a name="keywordMatchConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration getKeywordMatchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---

##### `sentimentConfigurationInput`<sup>Optional</sup> <a name="sentimentConfigurationInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfigurationInput"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration getSentimentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>

---


### ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference;

new ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType">resetSentimentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetSentimentType` <a name="resetSentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetSentimentType"></a>

```java
public void resetSentimentType()
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resetTimePeriod"></a>

```java
public void resetTimePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput">sentimentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput">timePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">sentimentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">timePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `sentimentTypeInput`<sup>Optional</sup> <a name="sentimentTypeInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentTypeInput"></a>

```java
public java.lang.String getSentimentTypeInput();
```

- *Type:* java.lang.String

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriodInput"></a>

```java
public java.lang.Number getTimePeriodInput();
```

- *Type:* java.lang.Number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `sentimentType`<sup>Required</sup> <a name="sentimentType" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```java
public java.lang.String getSentimentType();
```

- *Type:* java.lang.String

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```java
public java.lang.Number getTimePeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">ChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---


### ChimeMediaInsightsPipelineConfigurationTagsList <a name="ChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationTagsList;

new ChimeMediaInsightsPipelineConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```java
public ChimeMediaInsightsPipelineConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeMediaInsightsPipelineConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>>

---


### ChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="ChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_media_insights_pipeline_configuration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference;

new ChimeMediaInsightsPipelineConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeMediaInsightsPipelineConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaInsightsPipelineConfiguration.ChimeMediaInsightsPipelineConfigurationTags">ChimeMediaInsightsPipelineConfigurationTags</a>

---



