# `logsMetricFilter` Submodule <a name="`logsMetricFilter` Submodule" id="@cdktn/provider-awscc.logsMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter awscc_logs_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilter;

LogsMetricFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filterPattern(java.lang.String)
    .logGroupName(java.lang.String)
    .metricTransformations(IResolvable|java.util.List<LogsMetricFilterMetricTransformations>)
//  .applyOnTransformedLogs(java.lang.Boolean|IResolvable)
//  .emitSystemFieldDimensions(java.util.List<java.lang.String>)
//  .fieldSelectionCriteria(java.lang.String)
//  .filterName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.metricTransformations">metricTransformations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>></code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.emitSystemFieldDimensions">emitSystemFieldDimensions</a></code> | <code>java.util.List<java.lang.String></code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>java.lang.String</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterName">filterName</a></code> | <code>java.lang.String</code> | The name of the metric filter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterPattern"></a>

- *Type:* java.lang.String

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.logGroupName"></a>

- *Type:* java.lang.String

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `metricTransformations`<sup>Required</sup> <a name="metricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.metricTransformations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>>

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.applyOnTransformedLogs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `emitSystemFieldDimensions`<sup>Optional</sup> <a name="emitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.emitSystemFieldDimensions"></a>

- *Type:* java.util.List<java.lang.String>

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `fieldSelectionCriteria`<sup>Optional</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.fieldSelectionCriteria"></a>

- *Type:* java.lang.String

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.Initializer.parameter.filterName"></a>

- *Type:* java.lang.String

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations">putMetricTransformations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs">resetApplyOnTransformedLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions">resetEmitSystemFieldDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria">resetFieldSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName">resetFilterName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetricTransformations` <a name="putMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations"></a>

```java
public void putMetricTransformations(IResolvable|java.util.List<LogsMetricFilterMetricTransformations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.putMetricTransformations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>>

---

##### `resetApplyOnTransformedLogs` <a name="resetApplyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetApplyOnTransformedLogs"></a>

```java
public void resetApplyOnTransformedLogs()
```

##### `resetEmitSystemFieldDimensions` <a name="resetEmitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetEmitSystemFieldDimensions"></a>

```java
public void resetEmitSystemFieldDimensions()
```

##### `resetFieldSelectionCriteria` <a name="resetFieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFieldSelectionCriteria"></a>

```java
public void resetFieldSelectionCriteria()
```

##### `resetFilterName` <a name="resetFilterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.resetFilterName"></a>

```java
public void resetFilterName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilter;

LogsMetricFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilter;

LogsMetricFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilter;

LogsMetricFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilter;

LogsMetricFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsMetricFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsMetricFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsMetricFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsMetricFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsMetricFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations">metricTransformations</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput">applyOnTransformedLogsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput">emitSystemFieldDimensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput">fieldSelectionCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput">filterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput">filterPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput">metricTransformationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions">emitSystemFieldDimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName">filterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricTransformations`<sup>Required</sup> <a name="metricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformations"></a>

```java
public LogsMetricFilterMetricTransformationsList getMetricTransformations();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList">LogsMetricFilterMetricTransformationsList</a>

---

##### `applyOnTransformedLogsInput`<sup>Optional</sup> <a name="applyOnTransformedLogsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `emitSystemFieldDimensionsInput`<sup>Optional</sup> <a name="emitSystemFieldDimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensionsInput"></a>

```java
public java.util.List<java.lang.String> getEmitSystemFieldDimensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldSelectionCriteriaInput`<sup>Optional</sup> <a name="fieldSelectionCriteriaInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteriaInput"></a>

```java
public java.lang.String getFieldSelectionCriteriaInput();
```

- *Type:* java.lang.String

---

##### `filterNameInput`<sup>Optional</sup> <a name="filterNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterNameInput"></a>

```java
public java.lang.String getFilterNameInput();
```

- *Type:* java.lang.String

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPatternInput"></a>

```java
public java.lang.String getFilterPatternInput();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `metricTransformationsInput`<sup>Optional</sup> <a name="metricTransformationsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.metricTransformationsInput"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformations> getMetricTransformationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>>

---

##### `applyOnTransformedLogs`<sup>Required</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.applyOnTransformedLogs"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `emitSystemFieldDimensions`<sup>Required</sup> <a name="emitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.emitSystemFieldDimensions"></a>

```java
public java.util.List<java.lang.String> getEmitSystemFieldDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldSelectionCriteria`<sup>Required</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.fieldSelectionCriteria"></a>

```java
public java.lang.String getFieldSelectionCriteria();
```

- *Type:* java.lang.String

---

##### `filterName`<sup>Required</sup> <a name="filterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterName"></a>

```java
public java.lang.String getFilterName();
```

- *Type:* java.lang.String

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricFilterConfig <a name="LogsMetricFilterConfig" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterConfig;

LogsMetricFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .filterPattern(java.lang.String)
    .logGroupName(java.lang.String)
    .metricTransformations(IResolvable|java.util.List<LogsMetricFilterMetricTransformations>)
//  .applyOnTransformedLogs(java.lang.Boolean|IResolvable)
//  .emitSystemFieldDimensions(java.util.List<java.lang.String>)
//  .fieldSelectionCriteria(java.lang.String)
//  .filterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | A filter pattern for extracting metric data out of ingested log events. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | The name of an existing log group that you want to associate with this metric filter. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations">metricTransformations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>></code> | The metric transformations. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs">applyOnTransformedLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter is valid only for log groups that have an active log transformer. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions">emitSystemFieldDimensions</a></code> | <code>java.util.List<java.lang.String></code> | The list of system fields that are emitted as additional dimensions in the generated metrics. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria">fieldSelectionCriteria</a></code> | <code>java.lang.String</code> | The filter expression that specifies which log events are processed by this metric filter based on system fields. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName">filterName</a></code> | <code>java.lang.String</code> | The name of the metric filter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

A filter pattern for extracting metric data out of ingested log events.

For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#filter_pattern LogsMetricFilter#filter_pattern}

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

The name of an existing log group that you want to associate with this metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#log_group_name LogsMetricFilter#log_group_name}

---

##### `metricTransformations`<sup>Required</sup> <a name="metricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.metricTransformations"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformations> getMetricTransformations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>>

The metric transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#metric_transformations LogsMetricFilter#metric_transformations}

---

##### `applyOnTransformedLogs`<sup>Optional</sup> <a name="applyOnTransformedLogs" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.applyOnTransformedLogs"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnTransformedLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter is valid only for log groups that have an active log transformer.

For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
If this value is `true`, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#apply_on_transformed_logs LogsMetricFilter#apply_on_transformed_logs}

---

##### `emitSystemFieldDimensions`<sup>Optional</sup> <a name="emitSystemFieldDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.emitSystemFieldDimensions"></a>

```java
public java.util.List<java.lang.String> getEmitSystemFieldDimensions();
```

- *Type:* java.util.List<java.lang.String>

The list of system fields that are emitted as additional dimensions in the generated metrics.

Returns the `emitSystemFieldDimensions` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#emit_system_field_dimensions LogsMetricFilter#emit_system_field_dimensions}

---

##### `fieldSelectionCriteria`<sup>Optional</sup> <a name="fieldSelectionCriteria" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.fieldSelectionCriteria"></a>

```java
public java.lang.String getFieldSelectionCriteria();
```

- *Type:* java.lang.String

The filter expression that specifies which log events are processed by this metric filter based on system fields.

Returns the `fieldSelectionCriteria` value if it was specified when the metric filter was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#field_selection_criteria LogsMetricFilter#field_selection_criteria}

---

##### `filterName`<sup>Optional</sup> <a name="filterName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterConfig.property.filterName"></a>

```java
public java.lang.String getFilterName();
```

- *Type:* java.lang.String

The name of the metric filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#filter_name LogsMetricFilter#filter_name}

---

### LogsMetricFilterMetricTransformations <a name="LogsMetricFilterMetricTransformations" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformations;

LogsMetricFilterMetricTransformations.builder()
    .metricName(java.lang.String)
    .metricNamespace(java.lang.String)
    .metricValue(java.lang.String)
//  .defaultValue(java.lang.Number)
//  .dimensions(IResolvable|java.util.List<LogsMetricFilterMetricTransformationsDimensions>)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | A custom namespace to contain your metric in CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue">metricValue</a></code> | <code>java.lang.String</code> | The value that is published to the CloudWatch metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue">defaultValue</a></code> | <code>java.lang.Number</code> | (Optional) The value to emit when a filter pattern does not match a log event. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions">dimensions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>></code> | The fields to use as dimensions for the metric. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit to assign to the metric. If you omit this, the unit is set as ``None``. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the CloudWatch metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#metric_name LogsMetricFilter#metric_name}

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

A custom namespace to contain your metric in CloudWatch.

Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#metric_namespace LogsMetricFilter#metric_namespace}

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.metricValue"></a>

```java
public java.lang.String getMetricValue();
```

- *Type:* java.lang.String

The value that is published to the CloudWatch metric.

For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#metric_value LogsMetricFilter#metric_value}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.defaultValue"></a>

```java
public java.lang.Number getDefaultValue();
```

- *Type:* java.lang.Number

(Optional) The value to emit when a filter pattern does not match a log event.

This value can be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#default_value LogsMetricFilter#default_value}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.dimensions"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformationsDimensions> getDimensions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>>

The fields to use as dimensions for the metric.

One metric filter can include as many as three dimensions.
Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#dimensions LogsMetricFilter#dimensions}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit to assign to the metric. If you omit this, the unit is set as ``None``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#unit LogsMetricFilter#unit}

---

### LogsMetricFilterMetricTransformationsDimensions <a name="LogsMetricFilterMetricTransformationsDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformationsDimensions;

LogsMetricFilterMetricTransformationsDimensions.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key">key</a></code> | <code>java.lang.String</code> | The name for the CW metric dimension that the metric filter creates. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value">value</a></code> | <code>java.lang.String</code> | The log event field that will contain the value for this dimension. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name for the CW metric dimension that the metric filter creates.

Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#key LogsMetricFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The log event field that will contain the value for this dimension.

This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/logs_metric_filter#value LogsMetricFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricFilterMetricTransformationsDimensionsList <a name="LogsMetricFilterMetricTransformationsDimensionsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformationsDimensionsList;

new LogsMetricFilterMetricTransformationsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get"></a>

```java
public LogsMetricFilterMetricTransformationsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformationsDimensions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>>

---


### LogsMetricFilterMetricTransformationsDimensionsOutputReference <a name="LogsMetricFilterMetricTransformationsDimensionsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformationsDimensionsOutputReference;

new LogsMetricFilterMetricTransformationsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsMetricFilterMetricTransformationsDimensions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>

---


### LogsMetricFilterMetricTransformationsList <a name="LogsMetricFilterMetricTransformationsList" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformationsList;

new LogsMetricFilterMetricTransformationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get"></a>

```java
public LogsMetricFilterMetricTransformationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>>

---


### LogsMetricFilterMetricTransformationsOutputReference <a name="LogsMetricFilterMetricTransformationsOutputReference" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_metric_filter.LogsMetricFilterMetricTransformationsOutputReference;

new LogsMetricFilterMetricTransformationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions"></a>

```java
public void putDimensions(IResolvable|java.util.List<LogsMetricFilterMetricTransformationsDimensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.putDimensions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetDimensions"></a>

```java
public void resetDimensions()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput">metricValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue">metricValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensions"></a>

```java
public LogsMetricFilterMetricTransformationsDimensionsList getDimensions();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensionsList">LogsMetricFilterMetricTransformationsDimensionsList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValueInput"></a>

```java
public java.lang.Number getDefaultValueInput();
```

- *Type:* java.lang.Number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.dimensionsInput"></a>

```java
public IResolvable|java.util.List<LogsMetricFilterMetricTransformationsDimensions> getDimensionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsDimensions">LogsMetricFilterMetricTransformationsDimensions</a>>

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespaceInput"></a>

```java
public java.lang.String getMetricNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricValueInput`<sup>Optional</sup> <a name="metricValueInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValueInput"></a>

```java
public java.lang.String getMetricValueInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.defaultValue"></a>

```java
public java.lang.Number getDefaultValue();
```

- *Type:* java.lang.Number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricNamespace"></a>

```java
public java.lang.String getMetricNamespace();
```

- *Type:* java.lang.String

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.metricValue"></a>

```java
public java.lang.String getMetricValue();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformationsOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsMetricFilterMetricTransformations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsMetricFilter.LogsMetricFilterMetricTransformations">LogsMetricFilterMetricTransformations</a>

---



