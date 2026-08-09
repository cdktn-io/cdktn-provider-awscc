# `lookoutmetricsAlert` Submodule <a name="`lookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.lookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LookoutmetricsAlert <a name="LookoutmetricsAlert" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlert;

LookoutmetricsAlert.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(LookoutmetricsAlertAction)
    .alertSensitivityThreshold(java.lang.Number)
    .anomalyDetectorArn(java.lang.String)
//  .alertDescription(java.lang.String)
//  .alertName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>java.lang.Number</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertDescription">alertDescription</a></code> | <code>java.lang.String</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertName">alertName</a></code> | <code>java.lang.String</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertSensitivityThreshold"></a>

- *Type:* java.lang.Number

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.anomalyDetectorArn"></a>

- *Type:* java.lang.String

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `alertDescription`<sup>Optional</sup> <a name="alertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertDescription"></a>

- *Type:* java.lang.String

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `alertName`<sup>Optional</sup> <a name="alertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.Initializer.parameter.alertName"></a>

- *Type:* java.lang.String

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription">resetAlertDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName">resetAlertName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction"></a>

```java
public void putAction(LookoutmetricsAlertAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `resetAlertDescription` <a name="resetAlertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertDescription"></a>

```java
public void resetAlertDescription()
```

##### `resetAlertName` <a name="resetAlertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.resetAlertName"></a>

```java
public void resetAlertName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlert;

LookoutmetricsAlert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlert;

LookoutmetricsAlert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlert;

LookoutmetricsAlert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlert;

LookoutmetricsAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LookoutmetricsAlert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LookoutmetricsAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput">alertDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput">alertNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput">alertSensitivityThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput">anomalyDetectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription">alertDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName">alertName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.action"></a>

```java
public LookoutmetricsAlertActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference">LookoutmetricsAlertActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.actionInput"></a>

```java
public IResolvable|LookoutmetricsAlertAction getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---

##### `alertDescriptionInput`<sup>Optional</sup> <a name="alertDescriptionInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescriptionInput"></a>

```java
public java.lang.String getAlertDescriptionInput();
```

- *Type:* java.lang.String

---

##### `alertNameInput`<sup>Optional</sup> <a name="alertNameInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertNameInput"></a>

```java
public java.lang.String getAlertNameInput();
```

- *Type:* java.lang.String

---

##### `alertSensitivityThresholdInput`<sup>Optional</sup> <a name="alertSensitivityThresholdInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThresholdInput"></a>

```java
public java.lang.Number getAlertSensitivityThresholdInput();
```

- *Type:* java.lang.Number

---

##### `anomalyDetectorArnInput`<sup>Optional</sup> <a name="anomalyDetectorArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArnInput"></a>

```java
public java.lang.String getAnomalyDetectorArnInput();
```

- *Type:* java.lang.String

---

##### `alertDescription`<sup>Required</sup> <a name="alertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertDescription"></a>

```java
public java.lang.String getAlertDescription();
```

- *Type:* java.lang.String

---

##### `alertName`<sup>Required</sup> <a name="alertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertName"></a>

```java
public java.lang.String getAlertName();
```

- *Type:* java.lang.String

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```java
public java.lang.Number getAlertSensitivityThreshold();
```

- *Type:* java.lang.Number

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.anomalyDetectorArn"></a>

```java
public java.lang.String getAnomalyDetectorArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LookoutmetricsAlertAction <a name="LookoutmetricsAlertAction" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertAction;

LookoutmetricsAlertAction.builder()
//  .lambdaConfiguration(LookoutmetricsAlertActionLambdaConfiguration)
//  .snsConfiguration(LookoutmetricsAlertActionSnsConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration">lambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | Configuration options for a Lambda alert action. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | Configuration options for an SNS alert action. |

---

##### `lambdaConfiguration`<sup>Optional</sup> <a name="lambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.lambdaConfiguration"></a>

```java
public LookoutmetricsAlertActionLambdaConfiguration getLambdaConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

Configuration options for a Lambda alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_configuration LookoutmetricsAlert#lambda_configuration}

---

##### `snsConfiguration`<sup>Optional</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction.property.snsConfiguration"></a>

```java
public LookoutmetricsAlertActionSnsConfiguration getSnsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

Configuration options for an SNS alert action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_configuration LookoutmetricsAlert#sns_configuration}

---

### LookoutmetricsAlertActionLambdaConfiguration <a name="LookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertActionLambdaConfiguration;

LookoutmetricsAlertActionLambdaConfiguration.builder()
//  .lambdaArn(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | ARN of a Lambda to send alert notifications to. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of an IAM role that LookoutMetrics should assume to access the Lambda function. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

ARN of a Lambda to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#lambda_arn LookoutmetricsAlert#lambda_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

### LookoutmetricsAlertActionSnsConfiguration <a name="LookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertActionSnsConfiguration;

LookoutmetricsAlertActionSnsConfiguration.builder()
//  .roleArn(java.lang.String)
//  .snsTopicArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of an IAM role that LookoutMetrics should assume to access the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | ARN of an SNS topic to send alert notifications to. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#role_arn LookoutmetricsAlert#role_arn}

---

##### `snsTopicArn`<sup>Optional</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

ARN of an SNS topic to send alert notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#sns_topic_arn LookoutmetricsAlert#sns_topic_arn}

---

### LookoutmetricsAlertConfig <a name="LookoutmetricsAlertConfig" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertConfig;

LookoutmetricsAlertConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(LookoutmetricsAlertAction)
    .alertSensitivityThreshold(java.lang.Number)
    .anomalyDetectorArn(java.lang.String)
//  .alertDescription(java.lang.String)
//  .alertName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | The action to be taken by the alert when an anomaly is detected. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>java.lang.Number</code> | A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the Anomaly Detector to alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription">alertDescription</a></code> | <code>java.lang.String</code> | A description for the alert. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName">alertName</a></code> | <code>java.lang.String</code> | The name of the alert. If not provided, a name is generated automatically. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.action"></a>

```java
public LookoutmetricsAlertAction getAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

The action to be taken by the alert when an anomaly is detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#action LookoutmetricsAlert#action}

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertSensitivityThreshold"></a>

```java
public java.lang.Number getAlertSensitivityThreshold();
```

- *Type:* java.lang.Number

A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_sensitivity_threshold LookoutmetricsAlert#alert_sensitivity_threshold}

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.anomalyDetectorArn"></a>

```java
public java.lang.String getAnomalyDetectorArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) of the Anomaly Detector to alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#anomaly_detector_arn LookoutmetricsAlert#anomaly_detector_arn}

---

##### `alertDescription`<sup>Optional</sup> <a name="alertDescription" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertDescription"></a>

```java
public java.lang.String getAlertDescription();
```

- *Type:* java.lang.String

A description for the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_description LookoutmetricsAlert#alert_description}

---

##### `alertName`<sup>Optional</sup> <a name="alertName" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertConfig.property.alertName"></a>

```java
public java.lang.String getAlertName();
```

- *Type:* java.lang.String

The name of the alert. If not provided, a name is generated automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lookoutmetrics_alert#alert_name LookoutmetricsAlert#alert_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="LookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertActionLambdaConfigurationOutputReference;

new LookoutmetricsAlertActionLambdaConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutmetricsAlertActionLambdaConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---


### LookoutmetricsAlertActionOutputReference <a name="LookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertActionOutputReference;

new LookoutmetricsAlertActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration">putLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration">putSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration">resetLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration">resetSnsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConfiguration` <a name="putLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration"></a>

```java
public void putLambdaConfiguration(LookoutmetricsAlertActionLambdaConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putLambdaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `putSnsConfiguration` <a name="putSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration"></a>

```java
public void putSnsConfiguration(LookoutmetricsAlertActionSnsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.putSnsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `resetLambdaConfiguration` <a name="resetLambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetLambdaConfiguration"></a>

```java
public void resetLambdaConfiguration()
```

##### `resetSnsConfiguration` <a name="resetSnsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.resetSnsConfiguration"></a>

```java
public void resetSnsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">lambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput">lambdaConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput">snsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaConfiguration`<sup>Required</sup> <a name="lambdaConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```java
public LookoutmetricsAlertActionLambdaConfigurationOutputReference getLambdaConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfigurationOutputReference">LookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```java
public LookoutmetricsAlertActionSnsConfigurationOutputReference getSnsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference">LookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `lambdaConfigurationInput`<sup>Optional</sup> <a name="lambdaConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.lambdaConfigurationInput"></a>

```java
public IResolvable|LookoutmetricsAlertActionLambdaConfiguration getLambdaConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionLambdaConfiguration">LookoutmetricsAlertActionLambdaConfiguration</a>

---

##### `snsConfigurationInput`<sup>Optional</sup> <a name="snsConfigurationInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.snsConfigurationInput"></a>

```java
public IResolvable|LookoutmetricsAlertActionSnsConfiguration getSnsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutmetricsAlertAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertAction">LookoutmetricsAlertAction</a>

---


### LookoutmetricsAlertActionSnsConfigurationOutputReference <a name="LookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lookoutmetrics_alert.LookoutmetricsAlertActionSnsConfigurationOutputReference;

new LookoutmetricsAlertActionSnsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn">resetSnsTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSnsTopicArn` <a name="resetSnsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.resetSnsTopicArn"></a>

```java
public void resetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput">snsTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `snsTopicArnInput`<sup>Optional</sup> <a name="snsTopicArnInput" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArnInput"></a>

```java
public java.lang.String getSnsTopicArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|LookoutmetricsAlertActionSnsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lookoutmetricsAlert.LookoutmetricsAlertActionSnsConfiguration">LookoutmetricsAlertActionSnsConfiguration</a>

---



