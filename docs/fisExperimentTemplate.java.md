# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktn/provider-awscc.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template awscc_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplate;

FisExperimentTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .roleArn(java.lang.String)
    .stopConditions(IResolvable|java.util.List<FisExperimentTemplateStopConditions>)
    .targets(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets>)
//  .actions(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions>)
//  .experimentOptions(FisExperimentTemplateExperimentOptions)
//  .experimentReportConfiguration(FisExperimentTemplateExperimentReportConfiguration)
//  .logConfiguration(FisExperimentTemplateLogConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopConditions">stopConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>></code> | One or more stop conditions. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>></code> | The targets for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>></code> | The actions for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.stopConditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>>

One or more stop conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#stop_conditions FisExperimentTemplate#stop_conditions}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.targets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>>

The targets for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.actions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>>

The actions for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#actions FisExperimentTemplate#actions}

---

##### `experimentOptions`<sup>Optional</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}.

---

##### `experimentReportConfiguration`<sup>Optional</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.experimentReportConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions">putExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration">putExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions">putStopConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions">resetExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration">resetExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions"></a>

```java
public void putActions(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>>

---

##### `putExperimentOptions` <a name="putExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions"></a>

```java
public void putExperimentOptions(FisExperimentTemplateExperimentOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `putExperimentReportConfiguration` <a name="putExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration"></a>

```java
public void putExperimentReportConfiguration(FisExperimentTemplateExperimentReportConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration"></a>

```java
public void putLogConfiguration(FisExperimentTemplateLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `putStopConditions` <a name="putStopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions"></a>

```java
public void putStopConditions(IResolvable|java.util.List<FisExperimentTemplateStopConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putStopConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetActions"></a>

```java
public void resetActions()
```

##### `resetExperimentOptions` <a name="resetExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions"></a>

```java
public void resetExperimentOptions()
```

##### `resetExperimentReportConfiguration` <a name="resetExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration"></a>

```java
public void resetExperimentReportConfiguration()
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplate;

FisExperimentTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplate;

FisExperimentTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplate;

FisExperimentTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplate;

FisExperimentTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FisExperimentTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FisExperimentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FisExperimentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId">experimentTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions">stopConditions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput">experimentOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput">experimentReportConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput">stopConditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actions"></a>

```java
public FisExperimentTemplateActionsMap getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap">FisExperimentTemplateActionsMap</a>

---

##### `experimentOptions`<sup>Required</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions"></a>

```java
public FisExperimentTemplateExperimentOptionsOutputReference getExperimentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `experimentReportConfiguration`<sup>Required</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationOutputReference getExperimentReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `experimentTemplateId`<sup>Required</sup> <a name="experimentTemplateId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentTemplateId"></a>

```java
public java.lang.String getExperimentTemplateId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration"></a>

```java
public FisExperimentTemplateLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditions"></a>

```java
public FisExperimentTemplateStopConditionsList getStopConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList">FisExperimentTemplateStopConditionsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targets"></a>

```java
public FisExperimentTemplateTargetsMap getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap">FisExperimentTemplateTargetsMap</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.actionsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `experimentOptionsInput`<sup>Optional</sup> <a name="experimentOptionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput"></a>

```java
public IResolvable|FisExperimentTemplateExperimentOptions getExperimentOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `experimentReportConfigurationInput`<sup>Optional</sup> <a name="experimentReportConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfiguration getExperimentReportConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput"></a>

```java
public IResolvable|FisExperimentTemplateLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stopConditionsInput`<sup>Optional</sup> <a name="stopConditionsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionsInput"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateStopConditions> getStopConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.targetsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateActions <a name="FisExperimentTemplateActions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateActions;

FisExperimentTemplateActions.builder()
//  .actionId(java.lang.String)
//  .description(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .startAfter(java.util.List<java.lang.String>)
//  .targets(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId">actionId</a></code> | <code>java.lang.String</code> | The ID of the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description">description</a></code> | <code>java.lang.String</code> | A description for the action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The parameters for the action, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter">startAfter</a></code> | <code>java.util.List<java.lang.String></code> | The names of the actions that must be completed before the current action starts. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets">targets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | One or more targets for the action. |

---

##### `actionId`<sup>Optional</sup> <a name="actionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

The ID of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The parameters for the action, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.startAfter"></a>

```java
public java.util.List<java.lang.String> getStartAfter();
```

- *Type:* java.util.List<java.lang.String>

The names of the actions that must be completed before the current action starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions.property.targets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

One or more targets for the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateConfig;

FisExperimentTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .roleArn(java.lang.String)
    .stopConditions(IResolvable|java.util.List<FisExperimentTemplateStopConditions>)
    .targets(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets>)
//  .actions(IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions>)
//  .experimentOptions(FisExperimentTemplateExperimentOptions)
//  .experimentReportConfiguration(FisExperimentTemplateExperimentReportConfiguration)
//  .logConfiguration(FisExperimentTemplateLogConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions">stopConditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>></code> | One or more stop conditions. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>></code> | The targets for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>></code> | The actions for the experiment. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions">experimentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration">experimentReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}

---

##### `stopConditions`<sup>Required</sup> <a name="stopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopConditions"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateStopConditions> getStopConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>>

One or more stop conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#stop_conditions FisExperimentTemplate#stop_conditions}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.targets"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>>

The targets for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#targets FisExperimentTemplate#targets}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.actions"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>>

The actions for the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#actions FisExperimentTemplate#actions}

---

##### `experimentOptions`<sup>Optional</sup> <a name="experimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions"></a>

```java
public FisExperimentTemplateExperimentOptions getExperimentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}.

---

##### `experimentReportConfiguration`<sup>Optional</sup> <a name="experimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration"></a>

```java
public FisExperimentTemplateExperimentReportConfiguration getExperimentReportConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration"></a>

```java
public FisExperimentTemplateLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

### FisExperimentTemplateExperimentOptions <a name="FisExperimentTemplateExperimentOptions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentOptions;

FisExperimentTemplateExperimentOptions.builder()
//  .accountTargeting(java.lang.String)
//  .emptyTargetResolutionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting">accountTargeting</a></code> | <code>java.lang.String</code> | The account targeting setting for the experiment template. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>java.lang.String</code> | The target resolution failure mode for the experiment template. |

---

##### `accountTargeting`<sup>Optional</sup> <a name="accountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting"></a>

```java
public java.lang.String getAccountTargeting();
```

- *Type:* java.lang.String

The account targeting setting for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}

---

##### `emptyTargetResolutionMode`<sup>Optional</sup> <a name="emptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode"></a>

```java
public java.lang.String getEmptyTargetResolutionMode();
```

- *Type:* java.lang.String

The target resolution failure mode for the experiment template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}

---

### FisExperimentTemplateExperimentReportConfiguration <a name="FisExperimentTemplateExperimentReportConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfiguration;

FisExperimentTemplateExperimentReportConfiguration.builder()
//  .dataSources(FisExperimentTemplateExperimentReportConfigurationDataSources)
//  .outputs(FisExperimentTemplateExperimentReportConfigurationOutputs)
//  .postExperimentDuration(java.lang.String)
//  .preExperimentDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration">postExperimentDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration">preExperimentDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}. |

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationDataSources getDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationOutputs getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}.

---

##### `postExperimentDuration`<sup>Optional</sup> <a name="postExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration"></a>

```java
public java.lang.String getPostExperimentDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

##### `preExperimentDuration`<sup>Optional</sup> <a name="preExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration"></a>

```java
public java.lang.String getPreExperimentDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSources <a name="FisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationDataSources;

FisExperimentTemplateExperimentReportConfigurationDataSources.builder()
//  .cloudwatchDashboards(IResolvable|java.util.List<FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards">cloudwatchDashboards</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}. |

---

##### `cloudwatchDashboards`<sup>Optional</sup> <a name="cloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboards"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards> getCloudwatchDashboards();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_dashboards FisExperimentTemplate#cloudwatch_dashboards}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards;

FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.builder()
//  .dashboardIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier">dashboardIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}. |

---

##### `dashboardIdentifier`<sup>Optional</sup> <a name="dashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards.property.dashboardIdentifier"></a>

```java
public java.lang.String getDashboardIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#dashboard_identifier FisExperimentTemplate#dashboard_identifier}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputs <a name="FisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationOutputs;

FisExperimentTemplateExperimentReportConfigurationOutputs.builder()
//  .experimentReportS3Configuration(FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration">experimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}. |

---

##### `experimentReportS3Configuration`<sup>Optional</sup> <a name="experimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.experimentReportS3Configuration"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration getExperimentReportS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#experiment_report_s3_configuration FisExperimentTemplate#experiment_report_s3_configuration}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration;

FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.builder()
//  .bucketName(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateLogConfiguration <a name="FisExperimentTemplateLogConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfiguration;

FisExperimentTemplateLogConfiguration.builder()
//  .cloudwatchLogsConfiguration(FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration)
//  .logSchemaVersion(java.lang.Number)
//  .s3Configuration(FisExperimentTemplateLogConfigurationS3Configuration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion">logSchemaVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}. |

---

##### `cloudwatchLogsConfiguration`<sup>Optional</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration"></a>

```java
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration getCloudwatchLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}.

---

##### `logSchemaVersion`<sup>Optional</sup> <a name="logSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion"></a>

```java
public java.lang.Number getLogSchemaVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration"></a>

```java
public FisExperimentTemplateLogConfigurationS3Configuration getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}.

---

### FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration;

FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.builder()
//  .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

### FisExperimentTemplateLogConfigurationS3Configuration <a name="FisExperimentTemplateLogConfigurationS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfigurationS3Configuration;

FisExperimentTemplateLogConfigurationS3Configuration.builder()
//  .bucketName(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateStopConditions <a name="FisExperimentTemplateStopConditions" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateStopConditions;

FisExperimentTemplateStopConditions.builder()
    .source(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTargets <a name="FisExperimentTemplateTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargets;

FisExperimentTemplateTargets.builder()
//  .filters(IResolvable|java.util.List<FisExperimentTemplateTargetsFilters>)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
//  .resourceTags(java.util.Map<java.lang.String, java.lang.String>)
//  .resourceType(java.lang.String)
//  .selectionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters">filters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Resource Names (ARNs) of the target resources. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The AWS resource type. The resource type must be supported for the specified action. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode">selectionMode</a></code> | <code>java.lang.String</code> | Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.filters"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateTargetsFilters> getFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#filters FisExperimentTemplate#filters}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Resource Names (ARNs) of the target resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_tags FisExperimentTemplate#resource_tags}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The AWS resource type. The resource type must be supported for the specified action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}

---

##### `selectionMode`<sup>Optional</sup> <a name="selectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets.property.selectionMode"></a>

```java
public java.lang.String getSelectionMode();
```

- *Type:* java.lang.String

Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}

---

### FisExperimentTemplateTargetsFilters <a name="FisExperimentTemplateTargetsFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargetsFilters;

FisExperimentTemplateTargetsFilters.builder()
//  .path(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path">path</a></code> | <code>java.lang.String</code> | The attribute path for the filter. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The attribute values for the filter. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The attribute path for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The attribute values for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionsMap <a name="FisExperimentTemplateActionsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateActionsMap;

new FisExperimentTemplateActionsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get"></a>

```java
public FisExperimentTemplateActionsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>>

---


### FisExperimentTemplateActionsOutputReference <a name="FisExperimentTemplateActionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateActionsOutputReference;

new FisExperimentTemplateActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId">resetActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter">resetStartAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionId` <a name="resetActionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetActionId"></a>

```java
public void resetActionId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetStartAfter"></a>

```java
public void resetStartAfter()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput">startAfterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput">targetsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter">startAfter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets">targets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionIdInput"></a>

```java
public java.lang.String getActionIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfterInput"></a>

```java
public java.util.List<java.lang.String> getStartAfterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targetsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargetsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.startAfter"></a>

```java
public java.util.List<java.lang.String> getStartAfter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.targets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTargets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateActions">FisExperimentTemplateActions</a>

---


### FisExperimentTemplateExperimentOptionsOutputReference <a name="FisExperimentTemplateExperimentOptionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentOptionsOutputReference;

new FisExperimentTemplateExperimentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting">resetAccountTargeting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode">resetEmptyTargetResolutionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountTargeting` <a name="resetAccountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting"></a>

```java
public void resetAccountTargeting()
```

##### `resetEmptyTargetResolutionMode` <a name="resetEmptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode"></a>

```java
public void resetEmptyTargetResolutionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput">accountTargetingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput">emptyTargetResolutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">accountTargeting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">emptyTargetResolutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountTargetingInput`<sup>Optional</sup> <a name="accountTargetingInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput"></a>

```java
public java.lang.String getAccountTargetingInput();
```

- *Type:* java.lang.String

---

##### `emptyTargetResolutionModeInput`<sup>Optional</sup> <a name="emptyTargetResolutionModeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput"></a>

```java
public java.lang.String getEmptyTargetResolutionModeInput();
```

- *Type:* java.lang.String

---

##### `accountTargeting`<sup>Required</sup> <a name="accountTargeting" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```java
public java.lang.String getAccountTargeting();
```

- *Type:* java.lang.String

---

##### `emptyTargetResolutionMode`<sup>Required</sup> <a name="emptyTargetResolutionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```java
public java.lang.String getEmptyTargetResolutionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier">resetDashboardIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDashboardIdentifier` <a name="resetDashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.resetDashboardIdentifier"></a>

```java
public void resetDashboardIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput">dashboardIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier">dashboardIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashboardIdentifierInput`<sup>Optional</sup> <a name="dashboardIdentifierInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifierInput"></a>

```java
public java.lang.String getDashboardIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dashboardIdentifier`<sup>Required</sup> <a name="dashboardIdentifier" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.dashboardIdentifier"></a>

```java
public java.lang.String getDashboardIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards">putCloudwatchDashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards">resetCloudwatchDashboards</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchDashboards` <a name="putCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards"></a>

```java
public void putCloudwatchDashboards(IResolvable|java.util.List<FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboards.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>>

---

##### `resetCloudwatchDashboards` <a name="resetCloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboards"></a>

```java
public void resetCloudwatchDashboards()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards">cloudwatchDashboards</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput">cloudwatchDashboardsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchDashboards`<sup>Required</sup> <a name="cloudwatchDashboards" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboards"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList getCloudwatchDashboards();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardsList</a>

---

##### `cloudwatchDashboardsInput`<sup>Optional</sup> <a name="cloudwatchDashboardsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardsInput"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards> getCloudwatchDashboardsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboards</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationDataSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationOutputReference;

new FisExperimentTemplateExperimentReportConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration">resetPostExperimentDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration">resetPreExperimentDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources"></a>

```java
public void putDataSources(FisExperimentTemplateExperimentReportConfigurationDataSources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs"></a>

```java
public void putOutputs(FisExperimentTemplateExperimentReportConfigurationOutputs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs"></a>

```java
public void resetOutputs()
```

##### `resetPostExperimentDuration` <a name="resetPostExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration"></a>

```java
public void resetPostExperimentDuration()
```

##### `resetPreExperimentDuration` <a name="resetPreExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration"></a>

```java
public void resetPreExperimentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput">dataSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput">postExperimentDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput">preExperimentDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">postExperimentDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">preExperimentDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference getDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationDataSources getDataSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationOutputs getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `postExperimentDurationInput`<sup>Optional</sup> <a name="postExperimentDurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput"></a>

```java
public java.lang.String getPostExperimentDurationInput();
```

- *Type:* java.lang.String

---

##### `preExperimentDurationInput`<sup>Optional</sup> <a name="preExperimentDurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput"></a>

```java
public java.lang.String getPreExperimentDurationInput();
```

- *Type:* java.lang.String

---

##### `postExperimentDuration`<sup>Required</sup> <a name="postExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```java
public java.lang.String getPostExperimentDuration();
```

- *Type:* java.lang.String

---

##### `preExperimentDuration`<sup>Required</sup> <a name="preExperimentDuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```java
public java.lang.String getPreExperimentDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference;

new FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference;

new FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration">putExperimentReportS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration">resetExperimentReportS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExperimentReportS3Configuration` <a name="putExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration"></a>

```java
public void putExperimentReportS3Configuration(FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putExperimentReportS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---

##### `resetExperimentReportS3Configuration` <a name="resetExperimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetExperimentReportS3Configuration"></a>

```java
public void resetExperimentReportS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration">experimentReportS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput">experimentReportS3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `experimentReportS3Configuration`<sup>Required</sup> <a name="experimentReportS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3Configuration"></a>

```java
public FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference getExperimentReportS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3ConfigurationOutputReference</a>

---

##### `experimentReportS3ConfigurationInput`<sup>Optional</sup> <a name="experimentReportS3ConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.experimentReportS3ConfigurationInput"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration getExperimentReportS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsExperimentReportS3Configuration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateExperimentReportConfigurationOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference;

new FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### FisExperimentTemplateLogConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfigurationOutputReference;

new FisExperimentTemplateLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration">putCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration">resetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion">resetLogSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsConfiguration` <a name="putCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration"></a>

```java
public void putCloudwatchLogsConfiguration(FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(FisExperimentTemplateLogConfigurationS3Configuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `resetCloudwatchLogsConfiguration` <a name="resetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration"></a>

```java
public void resetCloudwatchLogsConfiguration()
```

##### `resetLogSchemaVersion` <a name="resetLogSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetLogSchemaVersion"></a>

```java
public void resetLogSchemaVersion()
```

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration"></a>

```java
public void resetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">cloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput">cloudwatchLogsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput">logSchemaVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">logSchemaVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsConfiguration`<sup>Required</sup> <a name="cloudwatchLogsConfiguration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```java
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference getCloudwatchLogsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```java
public FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference getS3Configuration();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `cloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```java
public IResolvable|FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration getCloudwatchLogsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `logSchemaVersionInput`<sup>Optional</sup> <a name="logSchemaVersionInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput"></a>

```java
public java.lang.Number getLogSchemaVersionInput();
```

- *Type:* java.lang.Number

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput"></a>

```java
public IResolvable|FisExperimentTemplateLogConfigurationS3Configuration getS3ConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `logSchemaVersion`<sup>Required</sup> <a name="logSchemaVersion" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```java
public java.lang.Number getLogSchemaVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---


### FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference;

new FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateLogConfigurationS3Configuration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---


### FisExperimentTemplateStopConditionsList <a name="FisExperimentTemplateStopConditionsList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateStopConditionsList;

new FisExperimentTemplateStopConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get"></a>

```java
public FisExperimentTemplateStopConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateStopConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>>

---


### FisExperimentTemplateStopConditionsOutputReference <a name="FisExperimentTemplateStopConditionsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateStopConditionsOutputReference;

new FisExperimentTemplateStopConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateStopConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateStopConditions">FisExperimentTemplateStopConditions</a>

---


### FisExperimentTemplateTargetsFiltersList <a name="FisExperimentTemplateTargetsFiltersList" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargetsFiltersList;

new FisExperimentTemplateTargetsFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get"></a>

```java
public FisExperimentTemplateTargetsFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateTargetsFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>>

---


### FisExperimentTemplateTargetsFiltersOutputReference <a name="FisExperimentTemplateTargetsFiltersOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargetsFiltersOutputReference;

new FisExperimentTemplateTargetsFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateTargetsFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>

---


### FisExperimentTemplateTargetsMap <a name="FisExperimentTemplateTargetsMap" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargetsMap;

new FisExperimentTemplateTargetsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get"></a>

```java
public FisExperimentTemplateTargetsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, FisExperimentTemplateTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>>

---


### FisExperimentTemplateTargetsOutputReference <a name="FisExperimentTemplateTargetsOutputReference" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.fis_experiment_template.FisExperimentTemplateTargetsOutputReference;

new FisExperimentTemplateTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode">resetSelectionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable|java.util.List<FisExperimentTemplateTargetsFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.putFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>>

---

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceArns"></a>

```java
public void resetResourceArns()
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceTags"></a>

```java
public void resetResourceTags()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetSelectionMode` <a name="resetSelectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.resetSelectionMode"></a>

```java
public void resetSelectionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput">filtersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput">resourceTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput">selectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags">resourceTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode">selectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filters"></a>

```java
public FisExperimentTemplateTargetsFiltersList getFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFiltersList">FisExperimentTemplateTargetsFiltersList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.filtersInput"></a>

```java
public IResolvable|java.util.List<FisExperimentTemplateTargetsFilters> getFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsFilters">FisExperimentTemplateTargetsFilters</a>>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `selectionModeInput`<sup>Optional</sup> <a name="selectionModeInput" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionModeInput"></a>

```java
public java.lang.String getSelectionModeInput();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `selectionMode`<sup>Required</sup> <a name="selectionMode" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.selectionMode"></a>

```java
public java.lang.String getSelectionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|FisExperimentTemplateTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fisExperimentTemplate.FisExperimentTemplateTargets">FisExperimentTemplateTargets</a>

---



