# `ssmquicksetupLifecycleAutomation` Submodule <a name="`ssmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupLifecycleAutomation <a name="SsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomation;

SsmquicksetupLifecycleAutomation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationDocument(java.lang.String)
    .automationParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .resourceKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationDocument">automationDocument</a></code> | <code>java.lang.String</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationParameters">automationParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.resourceKey">resourceKey</a></code> | <code>java.lang.String</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationDocument`<sup>Required</sup> <a name="automationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationDocument"></a>

- *Type:* java.lang.String

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationParameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.resourceKey"></a>

- *Type:* java.lang.String

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomation;

SsmquicksetupLifecycleAutomation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomation;

SsmquicksetupLifecycleAutomation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomation;

SsmquicksetupLifecycleAutomation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomation;

SsmquicksetupLifecycleAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmquicksetupLifecycleAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmquicksetupLifecycleAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput">automationDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput">automationParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput">resourceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument">automationDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters">automationParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey">resourceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `automationDocumentInput`<sup>Optional</sup> <a name="automationDocumentInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput"></a>

```java
public java.lang.String getAutomationDocumentInput();
```

- *Type:* java.lang.String

---

##### `automationParametersInput`<sup>Optional</sup> <a name="automationParametersInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getAutomationParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceKeyInput`<sup>Optional</sup> <a name="resourceKeyInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput"></a>

```java
public java.lang.String getResourceKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `automationDocument`<sup>Required</sup> <a name="automationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```java
public java.lang.String getAutomationDocument();
```

- *Type:* java.lang.String

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getAutomationParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```java
public java.lang.String getResourceKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupLifecycleAutomationConfig <a name="SsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_lifecycle_automation.SsmquicksetupLifecycleAutomationConfig;

SsmquicksetupLifecycleAutomationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationDocument(java.lang.String)
    .automationParameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
    .resourceKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument">automationDocument</a></code> | <code>java.lang.String</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters">automationParameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey">resourceKey</a></code> | <code>java.lang.String</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationDocument`<sup>Required</sup> <a name="automationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument"></a>

```java
public java.lang.String getAutomationDocument();
```

- *Type:* java.lang.String

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getAutomationParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey"></a>

```java
public java.lang.String getResourceKey();
```

- *Type:* java.lang.String

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---



