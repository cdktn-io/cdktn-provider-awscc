# `logsLogAnomalyDetector` Submodule <a name="`logsLogAnomalyDetector` Submodule" id="@cdktn/provider-awscc.logsLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsLogAnomalyDetector <a name="LogsLogAnomalyDetector" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetector;

LogsLogAnomalyDetector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .anomalyVisibilityTime(java.lang.Number)
//  .detectorName(java.lang.String)
//  .evaluationFrequency(java.lang.String)
//  .filterPattern(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logGroupArnList(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.detectorName">detectorName</a></code> | <code>java.lang.String</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | List of Arns for the given log group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.anomalyVisibilityTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.detectorName"></a>

- *Type:* java.lang.String

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.evaluationFrequency"></a>

- *Type:* java.lang.String

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.filterPattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `logGroupArnList`<sup>Optional</sup> <a name="logGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.Initializer.parameter.logGroupArnList"></a>

- *Type:* java.util.List<java.lang.String>

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime">resetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName">resetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency">resetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList">resetLogGroupArnList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAnomalyVisibilityTime` <a name="resetAnomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```java
public void resetAnomalyVisibilityTime()
```

##### `resetDetectorName` <a name="resetDetectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetDetectorName"></a>

```java
public void resetDetectorName()
```

##### `resetEvaluationFrequency` <a name="resetEvaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetEvaluationFrequency"></a>

```java
public void resetEvaluationFrequency()
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetFilterPattern"></a>

```java
public void resetFilterPattern()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLogGroupArnList` <a name="resetLogGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.resetLogGroupArnList"></a>

```java
public void resetLogGroupArnList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetector;

LogsLogAnomalyDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetector;

LogsLogAnomalyDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetector;

LogsLogAnomalyDetector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetector;

LogsLogAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsLogAnomalyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus">anomalyDetectorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp">creationTimeStamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp">lastModifiedTimeStamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput">anomalyVisibilityTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput">detectorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput">evaluationFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput">filterPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput">logGroupArnListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName">detectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorArn"></a>

```java
public java.lang.String getAnomalyDetectorArn();
```

- *Type:* java.lang.String

---

##### `anomalyDetectorStatus`<sup>Required</sup> <a name="anomalyDetectorStatus" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyDetectorStatus"></a>

```java
public java.lang.String getAnomalyDetectorStatus();
```

- *Type:* java.lang.String

---

##### `creationTimeStamp`<sup>Required</sup> <a name="creationTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.creationTimeStamp"></a>

```java
public java.lang.Number getCreationTimeStamp();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTimeStamp`<sup>Required</sup> <a name="lastModifiedTimeStamp" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.lastModifiedTimeStamp"></a>

```java
public java.lang.Number getLastModifiedTimeStamp();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `anomalyVisibilityTimeInput`<sup>Optional</sup> <a name="anomalyVisibilityTimeInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```java
public java.lang.Number getAnomalyVisibilityTimeInput();
```

- *Type:* java.lang.Number

---

##### `detectorNameInput`<sup>Optional</sup> <a name="detectorNameInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorNameInput"></a>

```java
public java.lang.String getDetectorNameInput();
```

- *Type:* java.lang.String

---

##### `evaluationFrequencyInput`<sup>Optional</sup> <a name="evaluationFrequencyInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```java
public java.lang.String getEvaluationFrequencyInput();
```

- *Type:* java.lang.String

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPatternInput"></a>

```java
public java.lang.String getFilterPatternInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logGroupArnListInput`<sup>Optional</sup> <a name="logGroupArnListInput" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnListInput"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `anomalyVisibilityTime`<sup>Required</sup> <a name="anomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```java
public java.lang.Number getAnomalyVisibilityTime();
```

- *Type:* java.lang.Number

---

##### `detectorName`<sup>Required</sup> <a name="detectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.detectorName"></a>

```java
public java.lang.String getDetectorName();
```

- *Type:* java.lang.String

---

##### `evaluationFrequency`<sup>Required</sup> <a name="evaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.evaluationFrequency"></a>

```java
public java.lang.String getEvaluationFrequency();
```

- *Type:* java.lang.String

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logGroupArnList`<sup>Required</sup> <a name="logGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.logGroupArnList"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnList();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsLogAnomalyDetectorConfig <a name="LogsLogAnomalyDetectorConfig" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_log_anomaly_detector.LogsLogAnomalyDetectorConfig;

LogsLogAnomalyDetectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .anomalyVisibilityTime(java.lang.Number)
//  .detectorName(java.lang.String)
//  .evaluationFrequency(java.lang.String)
//  .filterPattern(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logGroupArnList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID for owner of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime">anomalyVisibilityTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName">detectorName</a></code> | <code>java.lang.String</code> | Name of detector. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency">evaluationFrequency</a></code> | <code>java.lang.String</code> | How often log group is evaluated. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern">filterPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. |
| <code><a href="#@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList">logGroupArnList</a></code> | <code>java.util.List<java.lang.String></code> | List of Arns for the given log group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account ID for owner of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#account_id LogsLogAnomalyDetector#account_id}

---

##### `anomalyVisibilityTime`<sup>Optional</sup> <a name="anomalyVisibilityTime" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```java
public java.lang.Number getAnomalyVisibilityTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#anomaly_visibility_time LogsLogAnomalyDetector#anomaly_visibility_time}.

---

##### `detectorName`<sup>Optional</sup> <a name="detectorName" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.detectorName"></a>

```java
public java.lang.String getDetectorName();
```

- *Type:* java.lang.String

Name of detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#detector_name LogsLogAnomalyDetector#detector_name}

---

##### `evaluationFrequency`<sup>Optional</sup> <a name="evaluationFrequency" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```java
public java.lang.String getEvaluationFrequency();
```

- *Type:* java.lang.String

How often log group is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#evaluation_frequency LogsLogAnomalyDetector#evaluation_frequency}

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.filterPattern"></a>

```java
public java.lang.String getFilterPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#filter_pattern LogsLogAnomalyDetector#filter_pattern}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#kms_key_id LogsLogAnomalyDetector#kms_key_id}

---

##### `logGroupArnList`<sup>Optional</sup> <a name="logGroupArnList" id="@cdktn/provider-awscc.logsLogAnomalyDetector.LogsLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```java
public java.util.List<java.lang.String> getLogGroupArnList();
```

- *Type:* java.util.List<java.lang.String>

List of Arns for the given log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_log_anomaly_detector#log_group_arn_list LogsLogAnomalyDetector#log_group_arn_list}

---



