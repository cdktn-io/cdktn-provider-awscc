# `medialiveCloudwatchAlarmTemplate` Submodule <a name="`medialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplate <a name="MedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplate;

MedialiveCloudwatchAlarmTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .comparisonOperator(java.lang.String)
    .metricName(java.lang.String)
    .name(java.lang.String)
    .statistic(java.lang.String)
    .targetResourceType(java.lang.String)
    .treatMissingData(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .description(java.lang.String)
//  .evaluationPeriods(java.lang.Number)
//  .groupIdentifier(java.lang.String)
//  .period(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold value to compare with the specified statistic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.comparisonOperator"></a>

- *Type:* java.lang.String

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.statistic"></a>

- *Type:* java.lang.String

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.treatMissingData"></a>

- *Type:* java.lang.String

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.datapointsToAlarm"></a>

- *Type:* java.lang.Number

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.evaluationPeriods"></a>

- *Type:* java.lang.Number

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.groupIdentifier"></a>

- *Type:* java.lang.String

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm">resetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier">resetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDatapointsToAlarm` <a name="resetDatapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDatapointsToAlarm"></a>

```java
public void resetDatapointsToAlarm()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetEvaluationPeriods"></a>

```java
public void resetEvaluationPeriods()
```

##### `resetGroupIdentifier` <a name="resetGroupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetGroupIdentifier"></a>

```java
public void resetGroupIdentifier()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.resetThreshold"></a>

```java
public void resetThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplate;

MedialiveCloudwatchAlarmTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplate;

MedialiveCloudwatchAlarmTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplate;

MedialiveCloudwatchAlarmTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplate;

MedialiveCloudwatchAlarmTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MedialiveCloudwatchAlarmTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">cloudwatchAlarmTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput">datapointsToAlarmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput">treatMissingDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cloudwatchAlarmTemplateId`<sup>Required</sup> <a name="cloudwatchAlarmTemplateId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```java
public java.lang.String getCloudwatchAlarmTemplateId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarmInput`<sup>Optional</sup> <a name="datapointsToAlarmInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarmInput"></a>

```java
public java.lang.Number getDatapointsToAlarmInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriodsInput"></a>

```java
public java.lang.Number getEvaluationPeriodsInput();
```

- *Type:* java.lang.Number

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifierInput"></a>

```java
public java.lang.String getGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `treatMissingDataInput`<sup>Optional</sup> <a name="treatMissingDataInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingDataInput"></a>

```java
public java.lang.String getTreatMissingDataInput();
```

- *Type:* java.lang.String

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateConfig <a name="MedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_cloudwatch_alarm_template.MedialiveCloudwatchAlarmTemplateConfig;

MedialiveCloudwatchAlarmTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .comparisonOperator(java.lang.String)
    .metricName(java.lang.String)
    .name(java.lang.String)
    .statistic(java.lang.String)
    .targetResourceType(java.lang.String)
    .treatMissingData(java.lang.String)
//  .datapointsToAlarm(java.lang.Number)
//  .description(java.lang.String)
//  .evaluationPeriods(java.lang.Number)
//  .groupIdentifier(java.lang.String)
//  .period(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator used to compare the specified statistic and the threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric associated with the alarm. Must be compatible with targetResourceType. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The statistic to apply to the alarm's metric data. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | The resource type this template should dynamically generate cloudwatch metric alarms for. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData">treatMissingData</a></code> | <code>java.lang.String</code> | Specifies how missing data points are treated when evaluating the alarm's condition. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>java.lang.Number</code> | The number of datapoints within the evaluation period that must be breaching to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods">evaluationPeriods</a></code> | <code>java.lang.Number</code> | The number of periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier">groupIdentifier</a></code> | <code>java.lang.String</code> | A cloudwatch alarm template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period">period</a></code> | <code>java.lang.Number</code> | The period, in seconds, over which the specified statistic is applied. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Represents the tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold value to compare with the specified statistic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator used to compare the specified statistic and the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator MedialiveCloudwatchAlarmTemplate#comparison_operator}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric associated with the alarm. Must be compatible with targetResourceType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#metric_name MedialiveCloudwatchAlarmTemplate#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#name MedialiveCloudwatchAlarmTemplate#name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The statistic to apply to the alarm's metric data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#statistic MedialiveCloudwatchAlarmTemplate#statistic}

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

The resource type this template should dynamically generate cloudwatch metric alarms for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type MedialiveCloudwatchAlarmTemplate#target_resource_type}

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.treatMissingData"></a>

```java
public java.lang.String getTreatMissingData();
```

- *Type:* java.lang.String

Specifies how missing data points are treated when evaluating the alarm's condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data MedialiveCloudwatchAlarmTemplate#treat_missing_data}

---

##### `datapointsToAlarm`<sup>Optional</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.datapointsToAlarm"></a>

```java
public java.lang.Number getDatapointsToAlarm();
```

- *Type:* java.lang.Number

The number of datapoints within the evaluation period that must be breaching to trigger the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm MedialiveCloudwatchAlarmTemplate#datapoints_to_alarm}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#description MedialiveCloudwatchAlarmTemplate#description}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.evaluationPeriods"></a>

```java
public java.lang.Number getEvaluationPeriods();
```

- *Type:* java.lang.Number

The number of periods over which data is compared to the specified threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods MedialiveCloudwatchAlarmTemplate#evaluation_periods}

---

##### `groupIdentifier`<sup>Optional</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.groupIdentifier"></a>

```java
public java.lang.String getGroupIdentifier();
```

- *Type:* java.lang.String

A cloudwatch alarm template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#group_identifier MedialiveCloudwatchAlarmTemplate#group_identifier}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The period, in seconds, over which the specified statistic is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#period MedialiveCloudwatchAlarmTemplate#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#tags MedialiveCloudwatchAlarmTemplate#tags}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplate.MedialiveCloudwatchAlarmTemplateConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The threshold value to compare with the specified statistic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/medialive_cloudwatch_alarm_template#threshold MedialiveCloudwatchAlarmTemplate#threshold}

---



