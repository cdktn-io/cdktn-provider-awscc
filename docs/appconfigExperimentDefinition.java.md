# `appconfigExperimentDefinition` Submodule <a name="`appconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.appconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentDefinition <a name="AppconfigExperimentDefinition" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinition;

AppconfigExperimentDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationIdentifier(java.lang.String)
    .audienceRule(java.lang.String)
    .configurationProfileIdentifier(java.lang.String)
    .control(AppconfigExperimentDefinitionControl)
    .environmentIdentifier(java.lang.String)
    .flagKey(java.lang.String)
    .name(java.lang.String)
    .treatments(IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments>)
//  .audienceDescription(java.lang.String)
//  .hypothesis(java.lang.String)
//  .launchCriteria(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigExperimentDefinitionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceRule">audienceRule</a></code> | <code>java.lang.String</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>java.lang.String</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.flagKey">flagKey</a></code> | <code>java.lang.String</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.treatments">treatments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>></code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceDescription">audienceDescription</a></code> | <code>java.lang.String</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.hypothesis">hypothesis</a></code> | <code>java.lang.String</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.launchCriteria">launchCriteria</a></code> | <code>java.lang.String</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>></code> | Tags to associate with the experiment definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.applicationIdentifier"></a>

- *Type:* java.lang.String

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceRule"></a>

- *Type:* java.lang.String

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.configurationProfileIdentifier"></a>

- *Type:* java.lang.String

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.control"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.environmentIdentifier"></a>

- *Type:* java.lang.String

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.flagKey"></a>

- *Type:* java.lang.String

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.treatments"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>>

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `audienceDescription`<sup>Optional</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceDescription"></a>

- *Type:* java.lang.String

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `hypothesis`<sup>Optional</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.hypothesis"></a>

- *Type:* java.lang.String

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `launchCriteria`<sup>Optional</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.launchCriteria"></a>

- *Type:* java.lang.String

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>>

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl">putControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments">putTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription">resetAudienceDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis">resetHypothesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria">resetLaunchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putControl` <a name="putControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl"></a>

```java
public void putControl(AppconfigExperimentDefinitionControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppconfigExperimentDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>>

---

##### `putTreatments` <a name="putTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments"></a>

```java
public void putTreatments(IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>>

---

##### `resetAudienceDescription` <a name="resetAudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription"></a>

```java
public void resetAudienceDescription()
```

##### `resetHypothesis` <a name="resetHypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis"></a>

```java
public void resetHypothesis()
```

##### `resetLaunchCriteria` <a name="resetLaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria"></a>

```java
public void resetLaunchCriteria()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinition;

AppconfigExperimentDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinition;

AppconfigExperimentDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinition;

AppconfigExperimentDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinition;

AppconfigExperimentDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppconfigExperimentDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppconfigExperimentDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId">experimentDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput">applicationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput">audienceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput">audienceRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput">configurationProfileIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput">controlInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput">flagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput">hypothesisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput">launchCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput">treatmentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription">audienceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule">audienceRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis">hypothesis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria">launchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control"></a>

```java
public AppconfigExperimentDefinitionControlOutputReference getControl();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `experimentDefinitionId`<sup>Required</sup> <a name="experimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```java
public java.lang.String getExperimentDefinitionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags"></a>

```java
public AppconfigExperimentDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments"></a>

```java
public AppconfigExperimentDefinitionTreatmentsList getTreatments();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `applicationIdentifierInput`<sup>Optional</sup> <a name="applicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput"></a>

```java
public java.lang.String getApplicationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `audienceDescriptionInput`<sup>Optional</sup> <a name="audienceDescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput"></a>

```java
public java.lang.String getAudienceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `audienceRuleInput`<sup>Optional</sup> <a name="audienceRuleInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput"></a>

```java
public java.lang.String getAudienceRuleInput();
```

- *Type:* java.lang.String

---

##### `configurationProfileIdentifierInput`<sup>Optional</sup> <a name="configurationProfileIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput"></a>

```java
public java.lang.String getConfigurationProfileIdentifierInput();
```

- *Type:* java.lang.String

---

##### `controlInput`<sup>Optional</sup> <a name="controlInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput"></a>

```java
public IResolvable|AppconfigExperimentDefinitionControl getControlInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput"></a>

```java
public java.lang.String getEnvironmentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput"></a>

```java
public java.lang.String getFlagKeyInput();
```

- *Type:* java.lang.String

---

##### `hypothesisInput`<sup>Optional</sup> <a name="hypothesisInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput"></a>

```java
public java.lang.String getHypothesisInput();
```

- *Type:* java.lang.String

---

##### `launchCriteriaInput`<sup>Optional</sup> <a name="launchCriteriaInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput"></a>

```java
public java.lang.String getLaunchCriteriaInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>>

---

##### `treatmentsInput`<sup>Optional</sup> <a name="treatmentsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments> getTreatmentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

---

##### `audienceDescription`<sup>Required</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription"></a>

```java
public java.lang.String getAudienceDescription();
```

- *Type:* java.lang.String

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule"></a>

```java
public java.lang.String getAudienceRule();
```

- *Type:* java.lang.String

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```java
public java.lang.String getConfigurationProfileIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

---

##### `hypothesis`<sup>Required</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis"></a>

```java
public java.lang.String getHypothesis();
```

- *Type:* java.lang.String

---

##### `launchCriteria`<sup>Required</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria"></a>

```java
public java.lang.String getLaunchCriteria();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentDefinitionConfig <a name="AppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionConfig;

AppconfigExperimentDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationIdentifier(java.lang.String)
    .audienceRule(java.lang.String)
    .configurationProfileIdentifier(java.lang.String)
    .control(AppconfigExperimentDefinitionControl)
    .environmentIdentifier(java.lang.String)
    .flagKey(java.lang.String)
    .name(java.lang.String)
    .treatments(IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments>)
//  .audienceDescription(java.lang.String)
//  .hypothesis(java.lang.String)
//  .launchCriteria(java.lang.String)
//  .tags(IResolvable|java.util.List<AppconfigExperimentDefinitionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule">audienceRule</a></code> | <code>java.lang.String</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier">configurationProfileIdentifier</a></code> | <code>java.lang.String</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments">treatments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>></code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription">audienceDescription</a></code> | <code>java.lang.String</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis">hypothesis</a></code> | <code>java.lang.String</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria">launchCriteria</a></code> | <code>java.lang.String</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>></code> | Tags to associate with the experiment definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `audienceRule`<sup>Required</sup> <a name="audienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule"></a>

```java
public java.lang.String getAudienceRule();
```

- *Type:* java.lang.String

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `configurationProfileIdentifier`<sup>Required</sup> <a name="configurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier"></a>

```java
public java.lang.String getConfigurationProfileIdentifier();
```

- *Type:* java.lang.String

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control"></a>

```java
public AppconfigExperimentDefinitionControl getControl();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments> getTreatments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>>

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `audienceDescription`<sup>Optional</sup> <a name="audienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription"></a>

```java
public java.lang.String getAudienceDescription();
```

- *Type:* java.lang.String

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `hypothesis`<sup>Optional</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis"></a>

```java
public java.lang.String getHypothesis();
```

- *Type:* java.lang.String

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `launchCriteria`<sup>Optional</sup> <a name="launchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria"></a>

```java
public java.lang.String getLaunchCriteria();
```

- *Type:* java.lang.String

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>>

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

### AppconfigExperimentDefinitionControl <a name="AppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionControl;

AppconfigExperimentDefinitionControl.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .weight(java.lang.Number)
//  .attributeValues(IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionControlAttributeValues>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight">weight</a></code> | <code>java.lang.Number</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues">attributeValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionControlAttributeValues> getAttributeValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

### AppconfigExperimentDefinitionControlAttributeValues <a name="AppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionControlAttributeValues;

AppconfigExperimentDefinitionControlAttributeValues.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .numberArray(java.util.List<java.lang.Number>)
//  .numberValue(java.lang.Number)
//  .stringArray(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray">numberArray</a></code> | <code>java.util.List<java.lang.Number></code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray">stringArray</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `numberArray`<sup>Optional</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray"></a>

```java
public java.util.List<java.lang.Number> getNumberArray();
```

- *Type:* java.util.List<java.lang.Number>

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `stringArray`<sup>Optional</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray"></a>

```java
public java.util.List<java.lang.String> getStringArray();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

### AppconfigExperimentDefinitionTags <a name="AppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTags;

AppconfigExperimentDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}

---

### AppconfigExperimentDefinitionTreatments <a name="AppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatments;

AppconfigExperimentDefinitionTreatments.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .weight(java.lang.Number)
//  .attributeValues(IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionTreatmentsAttributeValues>)
//  .description(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight">weight</a></code> | <code>java.lang.Number</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues">attributeValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key">key</a></code> | <code>java.lang.String</code> | The treatment key (read-only, auto-generated by service). |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionTreatmentsAttributeValues> getAttributeValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The treatment key (read-only, auto-generated by service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

### AppconfigExperimentDefinitionTreatmentsAttributeValues <a name="AppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatmentsAttributeValues;

AppconfigExperimentDefinitionTreatmentsAttributeValues.builder()
//  .booleanValue(java.lang.Boolean|IResolvable)
//  .numberArray(java.util.List<java.lang.Number>)
//  .numberValue(java.lang.Number)
//  .stringArray(java.util.List<java.lang.String>)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray">numberArray</a></code> | <code>java.util.List<java.lang.Number></code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray">stringArray</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | A string value. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `numberArray`<sup>Optional</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray"></a>

```java
public java.util.List<java.lang.Number> getNumberArray();
```

- *Type:* java.util.List<java.lang.Number>

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `numberValue`<sup>Optional</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `stringArray`<sup>Optional</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray"></a>

```java
public java.util.List<java.lang.String> getStringArray();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentDefinitionControlAttributeValuesMap <a name="AppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionControlAttributeValuesMap;

new AppconfigExperimentDefinitionControlAttributeValuesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```java
public AppconfigExperimentDefinitionControlAttributeValuesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionControlAttributeValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---


### AppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference;

new AppconfigExperimentDefinitionControlAttributeValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray">resetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray">resetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetNumberArray` <a name="resetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray"></a>

```java
public void resetNumberArray()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetStringArray` <a name="resetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray"></a>

```java
public void resetStringArray()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput">numberArrayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput">stringArrayInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberArrayInput`<sup>Optional</sup> <a name="numberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput"></a>

```java
public java.util.List<java.lang.Number> getNumberArrayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `stringArrayInput`<sup>Optional</sup> <a name="stringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput"></a>

```java
public java.util.List<java.lang.String> getStringArrayInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```java
public java.util.List<java.lang.Number> getNumberArray();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```java
public java.util.List<java.lang.String> getStringArray();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentDefinitionControlAttributeValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>

---


### AppconfigExperimentDefinitionControlOutputReference <a name="AppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionControlOutputReference;

new AppconfigExperimentDefinitionControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues">putAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeValues` <a name="putAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues"></a>

```java
public void putAttributeValues(IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionControlAttributeValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues"></a>

```java
public void resetAttributeValues()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```java
public AppconfigExperimentDefinitionControlAttributeValuesMap getAttributeValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionControlAttributeValues> getAttributeValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentDefinitionControl getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---


### AppconfigExperimentDefinitionTagsList <a name="AppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTagsList;

new AppconfigExperimentDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get"></a>

```java
public AppconfigExperimentDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>>

---


### AppconfigExperimentDefinitionTagsOutputReference <a name="AppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTagsOutputReference;

new AppconfigExperimentDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap;

new AppconfigExperimentDefinitionTreatmentsAttributeValuesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```java
public AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionTreatmentsAttributeValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference;

new AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray">resetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue">resetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray">resetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue"></a>

```java
public void resetBooleanValue()
```

##### `resetNumberArray` <a name="resetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray"></a>

```java
public void resetNumberArray()
```

##### `resetNumberValue` <a name="resetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue"></a>

```java
public void resetNumberValue()
```

##### `resetStringArray` <a name="resetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray"></a>

```java
public void resetStringArray()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput">numberArrayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput">numberValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput">stringArrayInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">booleanValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">numberArray</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">numberValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">stringArray</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberArrayInput`<sup>Optional</sup> <a name="numberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput"></a>

```java
public java.util.List<java.lang.Number> getNumberArrayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `numberValueInput`<sup>Optional</sup> <a name="numberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput"></a>

```java
public java.lang.Number getNumberValueInput();
```

- *Type:* java.lang.Number

---

##### `stringArrayInput`<sup>Optional</sup> <a name="stringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput"></a>

```java
public java.util.List<java.lang.String> getStringArrayInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```java
public java.lang.Boolean|IResolvable getBooleanValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numberArray`<sup>Required</sup> <a name="numberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```java
public java.util.List<java.lang.Number> getNumberArray();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `numberValue`<sup>Required</sup> <a name="numberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```java
public java.lang.Number getNumberValue();
```

- *Type:* java.lang.Number

---

##### `stringArray`<sup>Required</sup> <a name="stringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```java
public java.util.List<java.lang.String> getStringArray();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentDefinitionTreatmentsAttributeValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### AppconfigExperimentDefinitionTreatmentsList <a name="AppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatmentsList;

new AppconfigExperimentDefinitionTreatmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get"></a>

```java
public AppconfigExperimentDefinitionTreatmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppconfigExperimentDefinitionTreatments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>>

---


### AppconfigExperimentDefinitionTreatmentsOutputReference <a name="AppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appconfig_experiment_definition.AppconfigExperimentDefinitionTreatmentsOutputReference;

new AppconfigExperimentDefinitionTreatmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues">putAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeValues` <a name="putAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues"></a>

```java
public void putAttributeValues(IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionTreatmentsAttributeValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues"></a>

```java
public void resetAttributeValues()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">attributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```java
public AppconfigExperimentDefinitionTreatmentsAttributeValuesMap getAttributeValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AppconfigExperimentDefinitionTreatmentsAttributeValues> getAttributeValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppconfigExperimentDefinitionTreatments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>

---



