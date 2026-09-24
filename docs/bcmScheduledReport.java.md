# `bcmScheduledReport` Submodule <a name="`bcmScheduledReport` Submodule" id="@cdktn/provider-awscc.bcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmScheduledReport <a name="BcmScheduledReport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReport;

BcmScheduledReport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardArn(java.lang.String)
    .name(java.lang.String)
    .scheduleConfig(BcmScheduledReportScheduleConfig)
    .scheduledReportExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BcmScheduledReportTags>)
//  .widgetDateRangeOverride(BcmScheduledReportWidgetDateRangeOverride)
//  .widgetIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dashboardArn">dashboardArn</a></code> | <code>java.lang.String</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>></code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetIds">widgetIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of widget identifiers included in the scheduled report. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.dashboardArn"></a>

- *Type:* java.lang.String

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scheduledReportExecutionRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>>

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `widgetDateRangeOverride`<sup>Optional</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetDateRangeOverride"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `widgetIds`<sup>Optional</sup> <a name="widgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.widgetIds"></a>

- *Type:* java.util.List<java.lang.String>

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig">putScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride">putWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride">resetWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds">resetWidgetIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduleConfig` <a name="putScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig"></a>

```java
public void putScheduleConfig(BcmScheduledReportScheduleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BcmScheduledReportTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>>

---

##### `putWidgetDateRangeOverride` <a name="putWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride"></a>

```java
public void putWidgetDateRangeOverride(BcmScheduledReportWidgetDateRangeOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags"></a>

```java
public void resetTags()
```

##### `resetWidgetDateRangeOverride` <a name="resetWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride"></a>

```java
public void resetWidgetDateRangeOverride()
```

##### `resetWidgetIds` <a name="resetWidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds"></a>

```java
public void resetWidgetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReport;

BcmScheduledReport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReport;

BcmScheduledReport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReport;

BcmScheduledReport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReport;

BcmScheduledReport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BcmScheduledReport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BcmScheduledReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus">healthStatus</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput">dashboardArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput">scheduleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput">scheduledReportExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput">widgetDateRangeOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput">widgetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn">dashboardArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds">widgetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus"></a>

```java
public BcmScheduledReportHealthStatusOutputReference getHealthStatus();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig"></a>

```java
public BcmScheduledReportScheduleConfigOutputReference getScheduleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags"></a>

```java
public BcmScheduledReportTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `widgetDateRangeOverride`<sup>Required</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride"></a>

```java
public BcmScheduledReportWidgetDateRangeOverrideOutputReference getWidgetDateRangeOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `dashboardArnInput`<sup>Optional</sup> <a name="dashboardArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput"></a>

```java
public java.lang.String getDashboardArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleConfigInput`<sup>Optional</sup> <a name="scheduleConfigInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput"></a>

```java
public IResolvable|BcmScheduledReportScheduleConfig getScheduleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `scheduledReportExecutionRoleArnInput`<sup>Optional</sup> <a name="scheduledReportExecutionRoleArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput"></a>

```java
public java.lang.String getScheduledReportExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BcmScheduledReportTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>>

---

##### `widgetDateRangeOverrideInput`<sup>Optional</sup> <a name="widgetDateRangeOverrideInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverride getWidgetDateRangeOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `widgetIdsInput`<sup>Optional</sup> <a name="widgetIdsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput"></a>

```java
public java.util.List<java.lang.String> getWidgetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn"></a>

```java
public java.lang.String getDashboardArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```java
public java.lang.String getScheduledReportExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `widgetIds`<sup>Required</sup> <a name="widgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds"></a>

```java
public java.util.List<java.lang.String> getWidgetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BcmScheduledReportConfig <a name="BcmScheduledReportConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportConfig;

BcmScheduledReportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardArn(java.lang.String)
    .name(java.lang.String)
    .scheduleConfig(BcmScheduledReportScheduleConfig)
    .scheduledReportExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<BcmScheduledReportTags>)
//  .widgetDateRangeOverride(BcmScheduledReportWidgetDateRangeOverride)
//  .widgetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn">dashboardArn</a></code> | <code>java.lang.String</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>></code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds">widgetIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of widget identifiers included in the scheduled report. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn"></a>

```java
public java.lang.String getDashboardArn();
```

- *Type:* java.lang.String

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig"></a>

```java
public BcmScheduledReportScheduleConfig getScheduleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn"></a>

```java
public java.lang.String getScheduledReportExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BcmScheduledReportTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>>

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `widgetDateRangeOverride`<sup>Optional</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride"></a>

```java
public BcmScheduledReportWidgetDateRangeOverride getWidgetDateRangeOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `widgetIds`<sup>Optional</sup> <a name="widgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds"></a>

```java
public java.util.List<java.lang.String> getWidgetIds();
```

- *Type:* java.util.List<java.lang.String>

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

### BcmScheduledReportHealthStatus <a name="BcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportHealthStatus;

BcmScheduledReportHealthStatus.builder()
    .build();
```


### BcmScheduledReportScheduleConfig <a name="BcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportScheduleConfig;

BcmScheduledReportScheduleConfig.builder()
//  .scheduleExpression(java.lang.String)
//  .scheduleExpressionTimeZone(java.lang.String)
//  .schedulePeriod(BcmScheduledReportScheduleConfigSchedulePeriod)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | The schedule expression that specifies when to trigger the scheduled report run. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone">scheduleExpressionTimeZone</a></code> | <code>java.lang.String</code> | The time zone for the schedule expression, for example, UTC. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod">schedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | The time period during which the schedule is active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state">state</a></code> | <code>java.lang.String</code> | The state of the schedule. |

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

##### `scheduleExpressionTimeZone`<sup>Optional</sup> <a name="scheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone"></a>

```java
public java.lang.String getScheduleExpressionTimeZone();
```

- *Type:* java.lang.String

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

##### `schedulePeriod`<sup>Optional</sup> <a name="schedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod"></a>

```java
public BcmScheduledReportScheduleConfigSchedulePeriod getSchedulePeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

### BcmScheduledReportScheduleConfigSchedulePeriod <a name="BcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportScheduleConfigSchedulePeriod;

BcmScheduledReportScheduleConfigSchedulePeriod.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The time at which the schedule stops being active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The time at which the schedule becomes active. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportTags <a name="BcmScheduledReportTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportTags;

BcmScheduledReportTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#key BcmScheduledReport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverride <a name="BcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverride;

BcmScheduledReportWidgetDateRangeOverride.builder()
//  .endTime(BcmScheduledReportWidgetDateRangeOverrideEndTime)
//  .startTime(BcmScheduledReportWidgetDateRangeOverrideStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | The end of the range. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | The start of the range. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime"></a>

```java
public BcmScheduledReportWidgetDateRangeOverrideEndTime getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime"></a>

```java
public BcmScheduledReportWidgetDateRangeOverrideStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportWidgetDateRangeOverrideEndTime <a name="BcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverrideEndTime;

BcmScheduledReportWidgetDateRangeOverrideEndTime.builder()
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type">type</a></code> | <code>java.lang.String</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value">value</a></code> | <code>java.lang.String</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverrideStartTime <a name="BcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverrideStartTime;

BcmScheduledReportWidgetDateRangeOverrideStartTime.builder()
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type">type</a></code> | <code>java.lang.String</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value">value</a></code> | <code>java.lang.String</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmScheduledReportHealthStatusOutputReference <a name="BcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportHealthStatusOutputReference;

new BcmScheduledReportHealthStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">lastRefreshedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastRefreshedAt`<sup>Required</sup> <a name="lastRefreshedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```java
public java.lang.String getLastRefreshedAt();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```java
public BcmScheduledReportHealthStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a>

---


### BcmScheduledReportScheduleConfigOutputReference <a name="BcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportScheduleConfigOutputReference;

new BcmScheduledReportScheduleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod">putSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone">resetScheduleExpressionTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod">resetSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedulePeriod` <a name="putSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod"></a>

```java
public void putSchedulePeriod(BcmScheduledReportScheduleConfigSchedulePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```

##### `resetScheduleExpressionTimeZone` <a name="resetScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone"></a>

```java
public void resetScheduleExpressionTimeZone()
```

##### `resetSchedulePeriod` <a name="resetSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod"></a>

```java
public void resetSchedulePeriod()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">schedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput">scheduleExpressionTimeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput">schedulePeriodInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">scheduleExpressionTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedulePeriod`<sup>Required</sup> <a name="schedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```java
public BcmScheduledReportScheduleConfigSchedulePeriodOutputReference getSchedulePeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimeZoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimeZoneInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput"></a>

```java
public java.lang.String getScheduleExpressionTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `schedulePeriodInput`<sup>Optional</sup> <a name="schedulePeriodInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput"></a>

```java
public IResolvable|BcmScheduledReportScheduleConfigSchedulePeriod getSchedulePeriodInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `scheduleExpressionTimeZone`<sup>Required</sup> <a name="scheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```java
public java.lang.String getScheduleExpressionTimeZone();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportScheduleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---


### BcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="BcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference;

new BcmScheduledReportScheduleConfigSchedulePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportScheduleConfigSchedulePeriod getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### BcmScheduledReportTagsList <a name="BcmScheduledReportTagsList" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportTagsList;

new BcmScheduledReportTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get"></a>

```java
public BcmScheduledReportTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BcmScheduledReportTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>>

---


### BcmScheduledReportTagsOutputReference <a name="BcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportTagsOutputReference;

new BcmScheduledReportTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>

---


### BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference;

new BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideEndTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### BcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverrideOutputReference;

new BcmScheduledReportWidgetDateRangeOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime"></a>

```java
public void putEndTime(BcmScheduledReportWidgetDateRangeOverrideEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime"></a>

```java
public void putStartTime(BcmScheduledReportWidgetDateRangeOverrideStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```java
public BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```java
public BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideEndTime getEndTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---


### BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcm_scheduled_report.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference;

new BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



