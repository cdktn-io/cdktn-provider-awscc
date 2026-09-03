# `appconfigExperimentRun` Submodule <a name="`appconfigExperimentRun` Submodule" id="@cdktn/provider-awscc.appconfigExperimentRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentRun <a name="AppconfigExperimentRun" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run awscc_appconfig_experiment_run}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRun;

AppconfigExperimentRun.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationIdentifier(java.lang.String)
    .experimentDefinitionIdentifier(java.lang.String)
    .exposurePercentage(java.lang.Number)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigExperimentRunTags>)
//  .treatmentOverrides(AppconfigExperimentRunTreatmentOverrides)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | The application name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.experimentDefinitionIdentifier">experimentDefinitionIdentifier</a></code> | <code>java.lang.String</code> | The experiment definition name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.exposurePercentage">exposurePercentage</a></code> | <code>java.lang.Number</code> | Percentage of traffic exposed to the experiment (0-100). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>></code> | Tags to associate with the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.treatmentOverrides">treatmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | Treatment overrides for specific entities. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.applicationIdentifier"></a>

- *Type:* java.lang.String

The application name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#application_identifier AppconfigExperimentRun#application_identifier}

---

##### `experimentDefinitionIdentifier`<sup>Required</sup> <a name="experimentDefinitionIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.experimentDefinitionIdentifier"></a>

- *Type:* java.lang.String

The experiment definition name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier AppconfigExperimentRun#experiment_definition_identifier}

---

##### `exposurePercentage`<sup>Required</sup> <a name="exposurePercentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.exposurePercentage"></a>

- *Type:* java.lang.Number

Percentage of traffic exposed to the experiment (0-100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#exposure_percentage AppconfigExperimentRun#exposure_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#description AppconfigExperimentRun#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>>

Tags to associate with the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#tags AppconfigExperimentRun#tags}

---

##### `treatmentOverrides`<sup>Optional</sup> <a name="treatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.treatmentOverrides"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

Treatment overrides for specific entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#treatment_overrides AppconfigExperimentRun#treatment_overrides}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides">putTreatmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides">resetTreatmentOverrides</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppconfigExperimentRunTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>>

---

##### `putTreatmentOverrides` <a name="putTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides"></a>

```java
public void putTreatmentOverrides(AppconfigExperimentRunTreatmentOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags"></a>

```java
public void resetTags()
```

##### `resetTreatmentOverrides` <a name="resetTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides"></a>

```java
public void resetTreatmentOverrides()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRun;

AppconfigExperimentRun.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRun;

AppconfigExperimentRun.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRun;

AppconfigExperimentRun.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRun;

AppconfigExperimentRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppconfigExperimentRun.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppconfigExperimentRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppconfigExperimentRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run">run</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides">treatmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput">applicationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput">experimentDefinitionIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput">exposurePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput">treatmentOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier">experimentDefinitionIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage">exposurePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId"></a>

```java
public java.lang.String getExperimentDefinitionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run"></a>

```java
public java.lang.String getRun();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags"></a>

```java
public AppconfigExperimentRunTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a>

---

##### `treatmentOverrides`<sup>Required</sup> <a name="treatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides"></a>

```java
public AppconfigExperimentRunTreatmentOverridesOutputReference getTreatmentOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `applicationIdentifierInput`<sup>Optional</sup> <a name="applicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput"></a>

```java
public java.lang.String getApplicationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `experimentDefinitionIdentifierInput`<sup>Optional</sup> <a name="experimentDefinitionIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput"></a>

```java
public java.lang.String getExperimentDefinitionIdentifierInput();
```

- *Type:* java.lang.String

---

##### `exposurePercentageInput`<sup>Optional</sup> <a name="exposurePercentageInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput"></a>

```java
public java.lang.Number getExposurePercentageInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentRunTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>>

---

##### `treatmentOverridesInput`<sup>Optional</sup> <a name="treatmentOverridesInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput"></a>

```java
public IResolvable|AppconfigExperimentRunTreatmentOverrides getTreatmentOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `experimentDefinitionIdentifier`<sup>Required</sup> <a name="experimentDefinitionIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier"></a>

```java
public java.lang.String getExperimentDefinitionIdentifier();
```

- *Type:* java.lang.String

---

##### `exposurePercentage`<sup>Required</sup> <a name="exposurePercentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage"></a>

```java
public java.lang.Number getExposurePercentage();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentRunConfig <a name="AppconfigExperimentRunConfig" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunConfig;

AppconfigExperimentRunConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationIdentifier(java.lang.String)
    .experimentDefinitionIdentifier(java.lang.String)
    .exposurePercentage(java.lang.Number)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigExperimentRunTags>)
//  .treatmentOverrides(AppconfigExperimentRunTreatmentOverrides)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | The application name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier">experimentDefinitionIdentifier</a></code> | <code>java.lang.String</code> | The experiment definition name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage">exposurePercentage</a></code> | <code>java.lang.Number</code> | Percentage of traffic exposed to the experiment (0-100). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>></code> | Tags to associate with the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides">treatmentOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | Treatment overrides for specific entities. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

The application name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#application_identifier AppconfigExperimentRun#application_identifier}

---

##### `experimentDefinitionIdentifier`<sup>Required</sup> <a name="experimentDefinitionIdentifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier"></a>

```java
public java.lang.String getExperimentDefinitionIdentifier();
```

- *Type:* java.lang.String

The experiment definition name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier AppconfigExperimentRun#experiment_definition_identifier}

---

##### `exposurePercentage`<sup>Required</sup> <a name="exposurePercentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage"></a>

```java
public java.lang.Number getExposurePercentage();
```

- *Type:* java.lang.Number

Percentage of traffic exposed to the experiment (0-100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#exposure_percentage AppconfigExperimentRun#exposure_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#description AppconfigExperimentRun#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentRunTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>>

Tags to associate with the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#tags AppconfigExperimentRun#tags}

---

##### `treatmentOverrides`<sup>Optional</sup> <a name="treatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides"></a>

```java
public AppconfigExperimentRunTreatmentOverrides getTreatmentOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

Treatment overrides for specific entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#treatment_overrides AppconfigExperimentRun#treatment_overrides}

---

### AppconfigExperimentRunTags <a name="AppconfigExperimentRunTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunTags;

AppconfigExperimentRunTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#key AppconfigExperimentRun#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#value AppconfigExperimentRun#value}

---

### AppconfigExperimentRunTreatmentOverrides <a name="AppconfigExperimentRunTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunTreatmentOverrides;

AppconfigExperimentRunTreatmentOverrides.builder()
//  .inline(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline">inline</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of entity ID to treatment key (t1, t2, ..., or c for control). |

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInline();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of entity ID to treatment key (t1, t2, ..., or c for control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#inline AppconfigExperimentRun#inline}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentRunTagsList <a name="AppconfigExperimentRunTagsList" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunTagsList;

new AppconfigExperimentRunTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get"></a>

```java
public AppconfigExperimentRunTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentRunTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>>

---


### AppconfigExperimentRunTagsOutputReference <a name="AppconfigExperimentRunTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunTagsOutputReference;

new AppconfigExperimentRunTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentRunTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>

---


### AppconfigExperimentRunTreatmentOverridesOutputReference <a name="AppconfigExperimentRunTreatmentOverridesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_run.AppconfigExperimentRunTreatmentOverridesOutputReference;

new AppconfigExperimentRunTreatmentOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline">resetInline</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline"></a>

```java
public void resetInline()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline">inline</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInlineInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getInline();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentRunTreatmentOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---



