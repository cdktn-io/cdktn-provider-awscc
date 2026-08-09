# `frauddetectorDetector` Submodule <a name="`frauddetectorDetector` Submodule" id="@cdktn/provider-awscc.frauddetectorDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorDetector <a name="FrauddetectorDetector" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector awscc_frauddetector_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetector;

FrauddetectorDetector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .detectorId(java.lang.String)
    .eventType(FrauddetectorDetectorEventType)
    .rules(IResolvable|java.util.List<FrauddetectorDetectorRules>)
//  .associatedModels(IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels>)
//  .description(java.lang.String)
//  .detectorVersionStatus(java.lang.String)
//  .ruleExecutionMode(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorId">detectorId</a></code> | <code>java.lang.String</code> | The ID of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.eventType">eventType</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | The event type to associate this detector with. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.associatedModels">associatedModels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>></code> | The models to associate with this detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorVersionStatus">detectorVersionStatus</a></code> | <code>java.lang.String</code> | The desired detector version status for the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.ruleExecutionMode">ruleExecutionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>></code> | Tags associated with this detector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorId"></a>

- *Type:* java.lang.String

The ID of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.eventType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

The event type to associate this detector with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}.

---

##### `associatedModels`<sup>Optional</sup> <a name="associatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.associatedModels"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>>

The models to associate with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detectorVersionStatus`<sup>Optional</sup> <a name="detectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorVersionStatus"></a>

- *Type:* java.lang.String

The desired detector version status for the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="ruleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.ruleExecutionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>>

Tags associated with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels">putAssociatedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType">putEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels">resetAssociatedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus">resetDetectorVersionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode">resetRuleExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedModels` <a name="putAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels"></a>

```java
public void putAssociatedModels(IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>>

---

##### `putEventType` <a name="putEventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType"></a>

```java
public void putEventType(FrauddetectorDetectorEventType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<FrauddetectorDetectorRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>>

---

##### `resetAssociatedModels` <a name="resetAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels"></a>

```java
public void resetAssociatedModels()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDetectorVersionStatus` <a name="resetDetectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus"></a>

```java
public void resetDetectorVersionStatus()
```

##### `resetRuleExecutionMode` <a name="resetRuleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode"></a>

```java
public void resetRuleExecutionMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetector;

FrauddetectorDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetector;

FrauddetectorDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetector;

FrauddetectorDetector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetector;

FrauddetectorDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FrauddetectorDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FrauddetectorDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FrauddetectorDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels">associatedModels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId">detectorVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType">eventType</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput">associatedModelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput">detectorVersionStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput">eventTypeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput">ruleExecutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus">detectorVersionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode">ruleExecutionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associatedModels`<sup>Required</sup> <a name="associatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels"></a>

```java
public FrauddetectorDetectorAssociatedModelsList getAssociatedModels();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `detectorVersionId`<sup>Required</sup> <a name="detectorVersionId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId"></a>

```java
public java.lang.String getDetectorVersionId();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType"></a>

```java
public FrauddetectorDetectorEventTypeOutputReference getEventType();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules"></a>

```java
public FrauddetectorDetectorRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags"></a>

```java
public FrauddetectorDetectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a>

---

##### `associatedModelsInput`<sup>Optional</sup> <a name="associatedModelsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels> getAssociatedModelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `detectorVersionStatusInput`<sup>Optional</sup> <a name="detectorVersionStatusInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput"></a>

```java
public java.lang.String getDetectorVersionStatusInput();
```

- *Type:* java.lang.String

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput"></a>

```java
public IResolvable|FrauddetectorDetectorEventType getEventTypeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---

##### `ruleExecutionModeInput`<sup>Optional</sup> <a name="ruleExecutionModeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput"></a>

```java
public java.lang.String getRuleExecutionModeInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `detectorVersionStatus`<sup>Required</sup> <a name="detectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus"></a>

```java
public java.lang.String getDetectorVersionStatus();
```

- *Type:* java.lang.String

---

##### `ruleExecutionMode`<sup>Required</sup> <a name="ruleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode"></a>

```java
public java.lang.String getRuleExecutionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorDetectorAssociatedModels <a name="FrauddetectorDetectorAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorAssociatedModels;

FrauddetectorDetectorAssociatedModels.builder()
//  .arn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

### FrauddetectorDetectorConfig <a name="FrauddetectorDetectorConfig" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorConfig;

FrauddetectorDetectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .detectorId(java.lang.String)
    .eventType(FrauddetectorDetectorEventType)
    .rules(IResolvable|java.util.List<FrauddetectorDetectorRules>)
//  .associatedModels(IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels>)
//  .description(java.lang.String)
//  .detectorVersionStatus(java.lang.String)
//  .ruleExecutionMode(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | The ID of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType">eventType</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | The event type to associate this detector with. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels">associatedModels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>></code> | The models to associate with this detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus">detectorVersionStatus</a></code> | <code>java.lang.String</code> | The desired detector version status for the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode">ruleExecutionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>></code> | Tags associated with this detector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

The ID of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType"></a>

```java
public FrauddetectorDetectorEventType getEventType();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

The event type to associate this detector with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}.

---

##### `associatedModels`<sup>Optional</sup> <a name="associatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels> getAssociatedModels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>>

The models to associate with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detectorVersionStatus`<sup>Optional</sup> <a name="detectorVersionStatus" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus"></a>

```java
public java.lang.String getDetectorVersionStatus();
```

- *Type:* java.lang.String

The desired detector version status for the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}

---

##### `ruleExecutionMode`<sup>Optional</sup> <a name="ruleExecutionMode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode"></a>

```java
public java.lang.String getRuleExecutionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>>

Tags associated with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventType <a name="FrauddetectorDetectorEventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventType;

FrauddetectorDetectorEventType.builder()
//  .description(java.lang.String)
//  .entityTypes(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypes>)
//  .eventVariables(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariables>)
//  .inline(java.lang.Boolean|IResolvable)
//  .labels(IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabels>)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description">description</a></code> | <code>java.lang.String</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes">entityTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables">eventVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels">labels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name">name</a></code> | <code>java.lang.String</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>></code> | Tags associated with this event type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypes> getEntityTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}.

---

##### `eventVariables`<sup>Optional</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariables> getEventVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}.

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabels> getLabels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>>

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypes <a name="FrauddetectorDetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypes;

FrauddetectorDetectorEventTypeEntityTypes.builder()
//  .arn(java.lang.String)
//  .createdTime(java.lang.String)
//  .description(java.lang.String)
//  .inline(java.lang.Boolean|IResolvable)
//  .lastUpdatedTime(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypesTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | The time when the entity type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description">description</a></code> | <code>java.lang.String</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | The time when the entity type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>></code> | Tags associated with this entity type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

The time when the entity type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

The time when the entity type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypesTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>>

Tags associated with this entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypesTags <a name="FrauddetectorDetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypesTags;

FrauddetectorDetectorEventTypeEntityTypesTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeEventVariables <a name="FrauddetectorDetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariables;

FrauddetectorDetectorEventTypeEventVariables.builder()
//  .arn(java.lang.String)
//  .createdTime(java.lang.String)
//  .dataSource(java.lang.String)
//  .dataType(java.lang.String)
//  .defaultValue(java.lang.String)
//  .description(java.lang.String)
//  .inline(java.lang.Boolean|IResolvable)
//  .lastUpdatedTime(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariablesTags>)
//  .variableType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | The time when the event variable was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description">description</a></code> | <code>java.lang.String</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | The time when the event variable was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>></code> | Tags associated with this event variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType">variableType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

The time when the event variable was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

The time when the event variable was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariablesTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>>

Tags associated with this event variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

##### `variableType`<sup>Optional</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}.

---

### FrauddetectorDetectorEventTypeEventVariablesTags <a name="FrauddetectorDetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariablesTags;

FrauddetectorDetectorEventTypeEventVariablesTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeLabels <a name="FrauddetectorDetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabels;

FrauddetectorDetectorEventTypeLabels.builder()
//  .arn(java.lang.String)
//  .createdTime(java.lang.String)
//  .description(java.lang.String)
//  .inline(java.lang.Boolean|IResolvable)
//  .lastUpdatedTime(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabelsTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | The time when the label was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description">description</a></code> | <code>java.lang.String</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | The time when the label was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>></code> | Tags associated with this label. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

The time when the label was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

The time when the label was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabelsTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>>

Tags associated with this label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeLabelsTags <a name="FrauddetectorDetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabelsTags;

FrauddetectorDetectorEventTypeLabelsTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeTags <a name="FrauddetectorDetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeTags;

FrauddetectorDetectorEventTypeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRules <a name="FrauddetectorDetectorRules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRules;

FrauddetectorDetectorRules.builder()
//  .arn(java.lang.String)
//  .createdTime(java.lang.String)
//  .description(java.lang.String)
//  .detectorId(java.lang.String)
//  .expression(java.lang.String)
//  .language(java.lang.String)
//  .lastUpdatedTime(java.lang.String)
//  .outcomes(IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomes>)
//  .ruleId(java.lang.String)
//  .ruleVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorRulesTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description">description</a></code> | <code>java.lang.String</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes">outcomes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion">ruleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>></code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detectorId`<sup>Optional</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `outcomes`<sup>Optional</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomes> getOutcomes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}.

---

##### `ruleVersion`<sup>Optional</sup> <a name="ruleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion"></a>

```java
public java.lang.String getRuleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>>

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomes <a name="FrauddetectorDetectorRulesOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomes;

FrauddetectorDetectorRulesOutcomes.builder()
//  .arn(java.lang.String)
//  .createdTime(java.lang.String)
//  .description(java.lang.String)
//  .inline(java.lang.Boolean|IResolvable)
//  .lastUpdatedTime(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomesTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | The time when the outcome was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description">description</a></code> | <code>java.lang.String</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | The time when the outcome was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>></code> | Tags associated with this outcome. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `createdTime`<sup>Optional</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

The time when the outcome was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

The time when the outcome was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomesTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>>

Tags associated with this outcome.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomesTags <a name="FrauddetectorDetectorRulesOutcomesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomesTags;

FrauddetectorDetectorRulesOutcomesTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRulesTags <a name="FrauddetectorDetectorRulesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesTags;

FrauddetectorDetectorRulesTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorTags <a name="FrauddetectorDetectorTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorTags;

FrauddetectorDetectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorDetectorAssociatedModelsList <a name="FrauddetectorDetectorAssociatedModelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorAssociatedModelsList;

new FrauddetectorDetectorAssociatedModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get"></a>

```java
public FrauddetectorDetectorAssociatedModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorAssociatedModels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>>

---


### FrauddetectorDetectorAssociatedModelsOutputReference <a name="FrauddetectorDetectorAssociatedModelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorAssociatedModelsOutputReference;

new FrauddetectorDetectorAssociatedModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn"></a>

```java
public void resetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorAssociatedModels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>

---


### FrauddetectorDetectorEventTypeEntityTypesList <a name="FrauddetectorDetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypesList;

new FrauddetectorDetectorEventTypeEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get"></a>

```java
public FrauddetectorDetectorEventTypeEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>>

---


### FrauddetectorDetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypesOutputReference;

new FrauddetectorDetectorEventTypeEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypesTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```java
public void resetCreatedTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```java
public void resetInline()
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```java
public void resetLastUpdatedTime()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorEventTypeEntityTypesTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```java
public java.lang.String getCreatedTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```java
public java.lang.Boolean|IResolvable getInlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```java
public java.lang.String getLastUpdatedTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypesTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeEntityTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>

---


### FrauddetectorDetectorEventTypeEntityTypesTagsList <a name="FrauddetectorDetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypesTagsList;

new FrauddetectorDetectorEventTypeEntityTypesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get"></a>

```java
public FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypesTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>>

---


### FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference;

new FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeEntityTypesTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorDetectorEventTypeEventVariablesList <a name="FrauddetectorDetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariablesList;

new FrauddetectorDetectorEventTypeEventVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get"></a>

```java
public FrauddetectorDetectorEventTypeEventVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>>

---


### FrauddetectorDetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariablesOutputReference;

new FrauddetectorDetectorEventTypeEventVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType">resetVariableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariablesTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```java
public void resetCreatedTime()
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```java
public void resetDataSource()
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```java
public void resetInline()
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```java
public void resetLastUpdatedTime()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVariableType` <a name="resetVariableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```java
public void resetVariableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorEventTypeEventVariablesTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```java
public java.lang.String getCreatedTimeInput();
```

- *Type:* java.lang.String

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```java
public java.lang.Boolean|IResolvable getInlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```java
public java.lang.String getLastUpdatedTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariablesTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>>

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeEventVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>

---


### FrauddetectorDetectorEventTypeEventVariablesTagsList <a name="FrauddetectorDetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariablesTagsList;

new FrauddetectorDetectorEventTypeEventVariablesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get"></a>

```java
public FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariablesTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>>

---


### FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference;

new FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeEventVariablesTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorDetectorEventTypeLabelsList <a name="FrauddetectorDetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabelsList;

new FrauddetectorDetectorEventTypeLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get"></a>

```java
public FrauddetectorDetectorEventTypeLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>>

---


### FrauddetectorDetectorEventTypeLabelsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabelsOutputReference;

new FrauddetectorDetectorEventTypeLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabelsTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```java
public void resetCreatedTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline"></a>

```java
public void resetInline()
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```java
public void resetLastUpdatedTime()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorEventTypeLabelsTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```java
public java.lang.String getCreatedTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```java
public java.lang.Boolean|IResolvable getInlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```java
public java.lang.String getLastUpdatedTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabelsTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeLabels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>

---


### FrauddetectorDetectorEventTypeLabelsTagsList <a name="FrauddetectorDetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabelsTagsList;

new FrauddetectorDetectorEventTypeLabelsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get"></a>

```java
public FrauddetectorDetectorEventTypeLabelsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabelsTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>>

---


### FrauddetectorDetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference;

new FrauddetectorDetectorEventTypeLabelsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeLabelsTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>

---


### FrauddetectorDetectorEventTypeOutputReference <a name="FrauddetectorDetectorEventTypeOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeOutputReference;

new FrauddetectorDetectorEventTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables">putEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables">resetEventVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>>

---

##### `putEventVariables` <a name="putEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables"></a>

```java
public void putEventVariables(IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>>

---

##### `putLabels` <a name="putLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorEventTypeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes"></a>

```java
public void resetEntityTypes()
```

##### `resetEventVariables` <a name="resetEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables"></a>

```java
public void resetEventVariables()
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline"></a>

```java
public void resetInline()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables">eventVariables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput">eventVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput">labelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes"></a>

```java
public FrauddetectorDetectorEventTypeEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a>

---

##### `eventVariables`<sup>Required</sup> <a name="eventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables"></a>

```java
public FrauddetectorDetectorEventTypeEventVariablesList getEventVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels"></a>

```java
public FrauddetectorDetectorEventTypeLabelsList getLabels();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a>

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorEventTypeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEntityTypes> getEntityTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>>

---

##### `eventVariablesInput`<sup>Optional</sup> <a name="eventVariablesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeEventVariables> getEventVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>>

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput"></a>

```java
public java.lang.Boolean|IResolvable getInlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeLabels> getLabelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventType getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---


### FrauddetectorDetectorEventTypeTagsList <a name="FrauddetectorDetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeTagsList;

new FrauddetectorDetectorEventTypeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get"></a>

```java
public FrauddetectorDetectorEventTypeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorEventTypeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>>

---


### FrauddetectorDetectorEventTypeTagsOutputReference <a name="FrauddetectorDetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorEventTypeTagsOutputReference;

new FrauddetectorDetectorEventTypeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorEventTypeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>

---


### FrauddetectorDetectorRulesList <a name="FrauddetectorDetectorRulesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesList;

new FrauddetectorDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get"></a>

```java
public FrauddetectorDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>>

---


### FrauddetectorDetectorRulesOutcomesList <a name="FrauddetectorDetectorRulesOutcomesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomesList;

new FrauddetectorDetectorRulesOutcomesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get"></a>

```java
public FrauddetectorDetectorRulesOutcomesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>>

---


### FrauddetectorDetectorRulesOutcomesOutputReference <a name="FrauddetectorDetectorRulesOutcomesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomesOutputReference;

new FrauddetectorDetectorRulesOutcomesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline">resetInline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomesTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime"></a>

```java
public void resetCreatedTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInline` <a name="resetInline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline"></a>

```java
public void resetInline()
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime"></a>

```java
public void resetLastUpdatedTime()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput">inlineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline">inline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorRulesOutcomesTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput"></a>

```java
public java.lang.String getCreatedTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inlineInput`<sup>Optional</sup> <a name="inlineInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput"></a>

```java
public java.lang.Boolean|IResolvable getInlineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput"></a>

```java
public java.lang.String getLastUpdatedTimeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomesTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline"></a>

```java
public java.lang.Boolean|IResolvable getInline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorRulesOutcomes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>

---


### FrauddetectorDetectorRulesOutcomesTagsList <a name="FrauddetectorDetectorRulesOutcomesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomesTagsList;

new FrauddetectorDetectorRulesOutcomesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get"></a>

```java
public FrauddetectorDetectorRulesOutcomesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomesTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>>

---


### FrauddetectorDetectorRulesOutcomesTagsOutputReference <a name="FrauddetectorDetectorRulesOutcomesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutcomesTagsOutputReference;

new FrauddetectorDetectorRulesOutcomesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorRulesOutcomesTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>

---


### FrauddetectorDetectorRulesOutputReference <a name="FrauddetectorDetectorRulesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesOutputReference;

new FrauddetectorDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes">putOutcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime">resetCreatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId">resetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime">resetLastUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes">resetOutcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion">resetRuleVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutcomes` <a name="putOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes"></a>

```java
public void putOutcomes(IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FrauddetectorDetectorRulesTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>>

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetCreatedTime` <a name="resetCreatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime"></a>

```java
public void resetCreatedTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDetectorId` <a name="resetDetectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId"></a>

```java
public void resetDetectorId()
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetLastUpdatedTime` <a name="resetLastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime"></a>

```java
public void resetLastUpdatedTime()
```

##### `resetOutcomes` <a name="resetOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes"></a>

```java
public void resetOutcomes()
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId"></a>

```java
public void resetRuleId()
```

##### `resetRuleVersion` <a name="resetRuleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion"></a>

```java
public void resetRuleVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes">outcomes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput">createdTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput">lastUpdatedTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput">outcomesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput">ruleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion">ruleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outcomes`<sup>Required</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes"></a>

```java
public FrauddetectorDetectorRulesOutcomesList getOutcomes();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags"></a>

```java
public FrauddetectorDetectorRulesTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `createdTimeInput`<sup>Optional</sup> <a name="createdTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput"></a>

```java
public java.lang.String getCreatedTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimeInput`<sup>Optional</sup> <a name="lastUpdatedTimeInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput"></a>

```java
public java.lang.String getLastUpdatedTimeInput();
```

- *Type:* java.lang.String

---

##### `outcomesInput`<sup>Optional</sup> <a name="outcomesInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesOutcomes> getOutcomesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>>

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput"></a>

```java
public java.lang.String getRuleIdInput();
```

- *Type:* java.lang.String

---

##### `ruleVersionInput`<sup>Optional</sup> <a name="ruleVersionInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput"></a>

```java
public java.lang.String getRuleVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion"></a>

```java
public java.lang.String getRuleVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>

---


### FrauddetectorDetectorRulesTagsList <a name="FrauddetectorDetectorRulesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesTagsList;

new FrauddetectorDetectorRulesTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get"></a>

```java
public FrauddetectorDetectorRulesTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorRulesTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>>

---


### FrauddetectorDetectorRulesTagsOutputReference <a name="FrauddetectorDetectorRulesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorRulesTagsOutputReference;

new FrauddetectorDetectorRulesTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorRulesTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>

---


### FrauddetectorDetectorTagsList <a name="FrauddetectorDetectorTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorTagsList;

new FrauddetectorDetectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get"></a>

```java
public FrauddetectorDetectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FrauddetectorDetectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>>

---


### FrauddetectorDetectorTagsOutputReference <a name="FrauddetectorDetectorTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.frauddetector_detector.FrauddetectorDetectorTagsOutputReference;

new FrauddetectorDetectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FrauddetectorDetectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>

---



