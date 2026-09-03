# `inspectorv2CisScanConfiguration` Submodule <a name="`inspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CisScanConfiguration <a name="Inspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfiguration;

Inspectorv2CisScanConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scanName(java.lang.String)
    .schedule(Inspectorv2CisScanConfigurationSchedule)
    .securityLevel(java.lang.String)
    .targets(Inspectorv2CisScanConfigurationTargets)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scanName">scanName</a></code> | <code>java.lang.String</code> | Name of the scan. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | Choose a Schedule cadence. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scanName"></a>

- *Type:* java.lang.String

Name of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

Choose a Schedule cadence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.securityLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.targets"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule"></a>

```java
public void putSchedule(Inspectorv2CisScanConfigurationSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets"></a>

```java
public void putTargets(Inspectorv2CisScanConfigurationTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfiguration;

Inspectorv2CisScanConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfiguration;

Inspectorv2CisScanConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfiguration;

Inspectorv2CisScanConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfiguration;

Inspectorv2CisScanConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Inspectorv2CisScanConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Inspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Inspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput">scanNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput">securityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName">scanName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule"></a>

```java
public Inspectorv2CisScanConfigurationScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets"></a>

```java
public Inspectorv2CisScanConfigurationTargetsOutputReference getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `scanNameInput`<sup>Optional</sup> <a name="scanNameInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput"></a>

```java
public java.lang.String getScanNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput"></a>

```java
public java.lang.String getSecurityLevelInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationTargets getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName"></a>

```java
public java.lang.String getScanName();
```

- *Type:* java.lang.String

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CisScanConfigurationConfig <a name="Inspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationConfig;

Inspectorv2CisScanConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scanName(java.lang.String)
    .schedule(Inspectorv2CisScanConfigurationSchedule)
    .securityLevel(java.lang.String)
    .targets(Inspectorv2CisScanConfigurationTargets)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName">scanName</a></code> | <code>java.lang.String</code> | Name of the scan. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | Choose a Schedule cadence. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel">securityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName"></a>

```java
public java.lang.String getScanName();
```

- *Type:* java.lang.String

Name of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule"></a>

```java
public Inspectorv2CisScanConfigurationSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

Choose a Schedule cadence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel"></a>

```java
public java.lang.String getSecurityLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets"></a>

```java
public Inspectorv2CisScanConfigurationTargets getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}.

---

### Inspectorv2CisScanConfigurationSchedule <a name="Inspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationSchedule;

Inspectorv2CisScanConfigurationSchedule.builder()
//  .daily(Inspectorv2CisScanConfigurationScheduleDaily)
//  .monthly(Inspectorv2CisScanConfigurationScheduleMonthly)
//  .oneTime(java.lang.String)
//  .weekly(Inspectorv2CisScanConfigurationScheduleWeekly)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime">oneTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily"></a>

```java
public Inspectorv2CisScanConfigurationScheduleDaily getDaily();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly"></a>

```java
public Inspectorv2CisScanConfigurationScheduleMonthly getMonthly();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}.

---

##### `oneTime`<sup>Optional</sup> <a name="oneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime"></a>

```java
public java.lang.String getOneTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}.

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly"></a>

```java
public Inspectorv2CisScanConfigurationScheduleWeekly getWeekly();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}.

---

### Inspectorv2CisScanConfigurationScheduleDaily <a name="Inspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleDaily;

Inspectorv2CisScanConfigurationScheduleDaily.builder()
//  .startTime(Inspectorv2CisScanConfigurationScheduleDailyStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleDailyStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleDailyStartTime <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleDailyStartTime;

Inspectorv2CisScanConfigurationScheduleDailyStartTime.builder()
//  .timeOfDay(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleMonthly <a name="Inspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleMonthly;

Inspectorv2CisScanConfigurationScheduleMonthly.builder()
//  .day(java.lang.String)
//  .startTime(Inspectorv2CisScanConfigurationScheduleMonthlyStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day">day</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleMonthlyStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime;

Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.builder()
//  .timeOfDay(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleWeekly <a name="Inspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleWeekly;

Inspectorv2CisScanConfigurationScheduleWeekly.builder()
//  .days(java.util.List<java.lang.String>)
//  .startTime(Inspectorv2CisScanConfigurationScheduleWeeklyStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days">days</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days"></a>

```java
public java.util.List<java.lang.String> getDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleWeeklyStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime;

Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.builder()
//  .timeOfDay(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationTargets <a name="Inspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationTargets;

Inspectorv2CisScanConfigurationTargets.builder()
    .accountIds(java.util.List<java.lang.String>)
    .targetResourceTags(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags">targetResourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}. |

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}.

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getTargetResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference;

new Inspectorv2CisScanConfigurationScheduleDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime"></a>

```java
public void putStartTime(Inspectorv2CisScanConfigurationScheduleDailyStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleDailyStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleDaily getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---


### Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference;

new Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay"></a>

```java
public void resetTimeOfDay()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleDailyStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference;

new Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime"></a>

```java
public void putStartTime(Inspectorv2CisScanConfigurationScheduleMonthlyStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `resetDay` <a name="resetDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthlyStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthly getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference;

new Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay"></a>

```java
public void resetTimeOfDay()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthlyStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleOutputReference <a name="Inspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleOutputReference;

new Inspectorv2CisScanConfigurationScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime">resetOneTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaily` <a name="putDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily"></a>

```java
public void putDaily(Inspectorv2CisScanConfigurationScheduleDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `putMonthly` <a name="putMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly"></a>

```java
public void putMonthly(Inspectorv2CisScanConfigurationScheduleMonthly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `putWeekly` <a name="putWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly"></a>

```java
public void putWeekly(Inspectorv2CisScanConfigurationScheduleWeekly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `resetDaily` <a name="resetDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly"></a>

```java
public void resetMonthly()
```

##### `resetOneTime` <a name="resetOneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime"></a>

```java
public void resetOneTime()
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly"></a>

```java
public void resetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput">dailyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput">oneTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput">weeklyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">oneTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```java
public Inspectorv2CisScanConfigurationScheduleDailyOutputReference getDaily();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```java
public Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference getMonthly();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```java
public Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference getWeekly();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleDaily getDailyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthly getMonthlyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `oneTimeInput`<sup>Optional</sup> <a name="oneTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput"></a>

```java
public java.lang.String getOneTimeInput();
```

- *Type:* java.lang.String

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeekly getWeeklyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```java
public java.lang.String getOneTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference;

new Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime"></a>

```java
public void putStartTime(Inspectorv2CisScanConfigurationScheduleWeeklyStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `resetDays` <a name="resetDays" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput">daysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">days</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```java
public Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput"></a>

```java
public java.util.List<java.lang.String> getDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeeklyStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```java
public java.util.List<java.lang.String> getDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeekly getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference;

new Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay"></a>

```java
public void resetTimeOfDay()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeeklyStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### Inspectorv2CisScanConfigurationTargetsOutputReference <a name="Inspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_cis_scan_configuration.Inspectorv2CisScanConfigurationTargetsOutputReference;

new Inspectorv2CisScanConfigurationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput">targetResourceTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">targetResourceTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetResourceTagsInput`<sup>Optional</sup> <a name="targetResourceTagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getTargetResourceTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getTargetResourceTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CisScanConfigurationTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---



