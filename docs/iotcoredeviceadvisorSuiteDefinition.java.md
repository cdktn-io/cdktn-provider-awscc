# `iotcoredeviceadvisorSuiteDefinition` Submodule <a name="`iotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcoredeviceadvisorSuiteDefinition <a name="IotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinition;

IotcoredeviceadvisorSuiteDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .suiteDefinitionConfiguration(IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration)
//  .tags(IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.suiteDefinitionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration">putSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSuiteDefinitionConfiguration` <a name="putSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration"></a>

```java
public void putSuiteDefinitionConfiguration(IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putSuiteDefinitionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinition;

IotcoredeviceadvisorSuiteDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinition;

IotcoredeviceadvisorSuiteDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinition;

IotcoredeviceadvisorSuiteDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinition;

IotcoredeviceadvisorSuiteDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotcoredeviceadvisorSuiteDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotcoredeviceadvisorSuiteDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">suiteDefinitionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">suiteDefinitionVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput">suiteDefinitionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `suiteDefinitionArn`<sup>Required</sup> <a name="suiteDefinitionArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```java
public java.lang.String getSuiteDefinitionArn();
```

- *Type:* java.lang.String

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference getSuiteDefinitionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```java
public java.lang.String getSuiteDefinitionId();
```

- *Type:* java.lang.String

---

##### `suiteDefinitionVersion`<sup>Required</sup> <a name="suiteDefinitionVersion" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```java
public java.lang.String getSuiteDefinitionVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList">IotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `suiteDefinitionConfigurationInput`<sup>Optional</sup> <a name="suiteDefinitionConfigurationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfigurationInput"></a>

```java
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration getSuiteDefinitionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotcoredeviceadvisorSuiteDefinitionConfig <a name="IotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionConfig;

IotcoredeviceadvisorSuiteDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .suiteDefinitionConfiguration(IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration)
//  .tags(IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.suiteDefinitionConfiguration"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration getSuiteDefinitionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;

IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.builder()
    .devicePermissionRoleArn(java.lang.String)
    .rootGroup(java.lang.String)
//  .devices(IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices>)
//  .intendedForQualification(java.lang.Boolean|IResolvable)
//  .suiteDefinitionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn">devicePermissionRoleArn</a></code> | <code>java.lang.String</code> | The device permission role arn of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup">rootGroup</a></code> | <code>java.lang.String</code> | The root group of the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices">devices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>></code> | The devices being tested in the test suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification">intendedForQualification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the tests are intended for qualification in a suite. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName">suiteDefinitionName</a></code> | <code>java.lang.String</code> | The Name of the suite definition. |

---

##### `devicePermissionRoleArn`<sup>Required</sup> <a name="devicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devicePermissionRoleArn"></a>

```java
public java.lang.String getDevicePermissionRoleArn();
```

- *Type:* java.lang.String

The device permission role arn of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}

---

##### `rootGroup`<sup>Required</sup> <a name="rootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.rootGroup"></a>

```java
public java.lang.String getRootGroup();
```

- *Type:* java.lang.String

The root group of the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.devices"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices> getDevices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>>

The devices being tested in the test suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}

---

##### `intendedForQualification`<sup>Optional</sup> <a name="intendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.intendedForQualification"></a>

```java
public java.lang.Boolean|IResolvable getIntendedForQualification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the tests are intended for qualification in a suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}

---

##### `suiteDefinitionName`<sup>Optional</sup> <a name="suiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.property.suiteDefinitionName"></a>

```java
public java.lang.String getSuiteDefinitionName();
```

- *Type:* java.lang.String

The Name of the suite definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}

---

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices;

IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.builder()
//  .certificateArn(java.lang.String)
//  .thingArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}.

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}.

---

### IotcoredeviceadvisorSuiteDefinitionTags <a name="IotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionTags;

IotcoredeviceadvisorSuiteDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#key IotcoredeviceadvisorSuiteDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotcoredeviceadvisor_suite_definition#value IotcoredeviceadvisorSuiteDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>>

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn">resetThingArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetThingArn` <a name="resetThingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resetThingArn"></a>

```java
public void resetThingArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput">thingArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">thingArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `thingArnInput`<sup>Optional</sup> <a name="thingArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArnInput"></a>

```java
public java.lang.String getThingArnInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```java
public java.lang.String getThingArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference;

new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices">putDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification">resetIntendedForQualification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName">resetSuiteDefinitionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevices` <a name="putDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices"></a>

```java
public void putDevices(IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.putDevices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>>

---

##### `resetDevices` <a name="resetDevices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetDevices"></a>

```java
public void resetDevices()
```

##### `resetIntendedForQualification` <a name="resetIntendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetIntendedForQualification"></a>

```java
public void resetIntendedForQualification()
```

##### `resetSuiteDefinitionName` <a name="resetSuiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resetSuiteDefinitionName"></a>

```java
public void resetSuiteDefinitionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput">devicePermissionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput">devicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput">intendedForQualificationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput">rootGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput">suiteDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">devicePermissionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">intendedForQualification</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">rootGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">suiteDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList getDevices();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `devicePermissionRoleArnInput`<sup>Optional</sup> <a name="devicePermissionRoleArnInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArnInput"></a>

```java
public java.lang.String getDevicePermissionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicesInput"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices> getDevicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>>

---

##### `intendedForQualificationInput`<sup>Optional</sup> <a name="intendedForQualificationInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualificationInput"></a>

```java
public java.lang.Boolean|IResolvable getIntendedForQualificationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rootGroupInput`<sup>Optional</sup> <a name="rootGroupInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroupInput"></a>

```java
public java.lang.String getRootGroupInput();
```

- *Type:* java.lang.String

---

##### `suiteDefinitionNameInput`<sup>Optional</sup> <a name="suiteDefinitionNameInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionNameInput"></a>

```java
public java.lang.String getSuiteDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `devicePermissionRoleArn`<sup>Required</sup> <a name="devicePermissionRoleArn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```java
public java.lang.String getDevicePermissionRoleArn();
```

- *Type:* java.lang.String

---

##### `intendedForQualification`<sup>Required</sup> <a name="intendedForQualification" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```java
public java.lang.Boolean|IResolvable getIntendedForQualification();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rootGroup`<sup>Required</sup> <a name="rootGroup" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```java
public java.lang.String getRootGroup();
```

- *Type:* java.lang.String

---

##### `suiteDefinitionName`<sup>Required</sup> <a name="suiteDefinitionName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```java
public java.lang.String getSuiteDefinitionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### IotcoredeviceadvisorSuiteDefinitionTagsList <a name="IotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionTagsList;

new IotcoredeviceadvisorSuiteDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```java
public IotcoredeviceadvisorSuiteDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotcoredeviceadvisorSuiteDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>>

---


### IotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="IotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotcoredeviceadvisor_suite_definition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference;

new IotcoredeviceadvisorSuiteDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotcoredeviceadvisorSuiteDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotcoredeviceadvisorSuiteDefinition.IotcoredeviceadvisorSuiteDefinitionTags">IotcoredeviceadvisorSuiteDefinitionTags</a>

---



