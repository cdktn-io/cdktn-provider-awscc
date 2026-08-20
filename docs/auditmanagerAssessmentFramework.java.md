# `auditmanagerAssessmentFramework` Submodule <a name="`auditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentFramework <a name="AuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFramework;

AuditmanagerAssessmentFramework.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlSets(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets>)
    .name(java.lang.String)
//  .complianceType(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.controlSets">controlSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>></code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.complianceType">complianceType</a></code> | <code>java.lang.String</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>></code> | The tags associated with the framework. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.controlSets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>>

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `complianceType`<sup>Optional</sup> <a name="complianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.complianceType"></a>

- *Type:* java.lang.String

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>>

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets">putControlSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType">resetComplianceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putControlSets` <a name="putControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets"></a>

```java
public void putControlSets(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>>

---

##### `resetComplianceType` <a name="resetComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType"></a>

```java
public void resetComplianceType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFramework;

AuditmanagerAssessmentFramework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFramework;

AuditmanagerAssessmentFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFramework;

AuditmanagerAssessmentFramework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFramework;

AuditmanagerAssessmentFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuditmanagerAssessmentFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuditmanagerAssessmentFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets">controlSets</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput">complianceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput">controlSetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType">complianceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets"></a>

```java
public AuditmanagerAssessmentFrameworkControlSetsList getControlSets();
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```java
public java.lang.String getLastUpdatedBy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags"></a>

```java
public AuditmanagerAssessmentFrameworkTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `complianceTypeInput`<sup>Optional</sup> <a name="complianceTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput"></a>

```java
public java.lang.String getComplianceTypeInput();
```

- *Type:* java.lang.String

---

##### `controlSetsInput`<sup>Optional</sup> <a name="controlSetsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets> getControlSetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>>

---

##### `complianceType`<sup>Required</sup> <a name="complianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType"></a>

```java
public java.lang.String getComplianceType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentFrameworkConfig <a name="AuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkConfig;

AuditmanagerAssessmentFrameworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .controlSets(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets>)
    .name(java.lang.String)
//  .complianceType(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets">controlSets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>></code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType">complianceType</a></code> | <code>java.lang.String</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>></code> | The tags associated with the framework. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets> getControlSets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>>

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `complianceType`<sup>Optional</sup> <a name="complianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType"></a>

```java
public java.lang.String getComplianceType();
```

- *Type:* java.lang.String

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>>

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

### AuditmanagerAssessmentFrameworkControlSets <a name="AuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSets;

AuditmanagerAssessmentFrameworkControlSets.builder()
    .controls(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSetsControls>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls">controls</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>></code> | The list of controls within the control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name">name</a></code> | <code>java.lang.String</code> | The name of the control set. |

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSetsControls> getControls();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>>

The list of controls within the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#controls AuditmanagerAssessmentFramework#controls}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

### AuditmanagerAssessmentFrameworkControlSetsControls <a name="AuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSetsControls;

AuditmanagerAssessmentFrameworkControlSetsControls.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the control. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#id AuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentFrameworkTags <a name="AuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkTags;

AuditmanagerAssessmentFrameworkTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#key AuditmanagerAssessmentFramework#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/auditmanager_assessment_framework#value AuditmanagerAssessmentFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentFrameworkControlSetsControlsList <a name="AuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSetsControlsList;

new AuditmanagerAssessmentFrameworkControlSetsControlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```java
public AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSetsControls> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>>

---


### AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference;

new AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```java
public IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>

---


### AuditmanagerAssessmentFrameworkControlSetsList <a name="AuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSetsList;

new AuditmanagerAssessmentFrameworkControlSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```java
public AuditmanagerAssessmentFrameworkControlSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>>

---


### AuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkControlSetsOutputReference;

new AuditmanagerAssessmentFrameworkControlSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls">putControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls"></a>

```java
public void putControls(IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSetsControls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput">controlsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```java
public AuditmanagerAssessmentFrameworkControlSetsControlsList getControls();
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkControlSetsControls> getControlsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```java
public IResolvable|AuditmanagerAssessmentFrameworkControlSets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>

---


### AuditmanagerAssessmentFrameworkTagsList <a name="AuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkTagsList;

new AuditmanagerAssessmentFrameworkTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get"></a>

```java
public AuditmanagerAssessmentFrameworkTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AuditmanagerAssessmentFrameworkTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>>

---


### AuditmanagerAssessmentFrameworkTagsOutputReference <a name="AuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.auditmanager_assessment_framework.AuditmanagerAssessmentFrameworkTagsOutputReference;

new AuditmanagerAssessmentFrameworkTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AuditmanagerAssessmentFrameworkTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>

---



