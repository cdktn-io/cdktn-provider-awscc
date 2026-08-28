# `ssmquicksetupConfigurationManager` Submodule <a name="`ssmquicksetupConfigurationManager` Submodule" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupConfigurationManager <a name="SsmquicksetupConfigurationManager" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManager;

SsmquicksetupConfigurationManager.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationDefinitions(IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions>)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.configurationDefinitions">configurationDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationDefinitions`<sup>Required</sup> <a name="configurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.configurationDefinitions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions">putConfigurationDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationDefinitions` <a name="putConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions"></a>

```java
public void putConfigurationDefinitions(IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManager;

SsmquicksetupConfigurationManager.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManager;

SsmquicksetupConfigurationManager.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManager;

SsmquicksetupConfigurationManager.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManager;

SsmquicksetupConfigurationManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmquicksetupConfigurationManager.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmquicksetupConfigurationManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitions">configurationDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList">SsmquicksetupConfigurationManagerConfigurationDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn">managerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries">statusSummaries</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionsInput">configurationDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationDefinitions`<sup>Required</sup> <a name="configurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitions"></a>

```java
public SsmquicksetupConfigurationManagerConfigurationDefinitionsList getConfigurationDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList">SsmquicksetupConfigurationManagerConfigurationDefinitionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `managerArn`<sup>Required</sup> <a name="managerArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn"></a>

```java
public java.lang.String getManagerArn();
```

- *Type:* java.lang.String

---

##### `statusSummaries`<sup>Required</sup> <a name="statusSummaries" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries"></a>

```java
public SsmquicksetupConfigurationManagerStatusSummariesList getStatusSummaries();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `configurationDefinitionsInput`<sup>Optional</sup> <a name="configurationDefinitionsInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionsInput"></a>

```java
public IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions> getConfigurationDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupConfigurationManagerConfig <a name="SsmquicksetupConfigurationManagerConfig" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerConfig;

SsmquicksetupConfigurationManagerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configurationDefinitions(IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions>)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinitions">configurationDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationDefinitions`<sup>Required</sup> <a name="configurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinitions"></a>

```java
public IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions> getConfigurationDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

### SsmquicksetupConfigurationManagerConfigurationDefinitions <a name="SsmquicksetupConfigurationManagerConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerConfigurationDefinitions;

SsmquicksetupConfigurationManagerConfigurationDefinitions.builder()
    .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .localDeploymentAdministrationRoleArn(java.lang.String)
//  .localDeploymentExecutionRoleName(java.lang.String)
//  .typeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#id SsmquicksetupConfigurationManager#id}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentAdministrationRoleArn">localDeploymentAdministrationRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentExecutionRoleName">localDeploymentExecutionRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.typeVersion">typeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}. |

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#id SsmquicksetupConfigurationManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localDeploymentAdministrationRoleArn`<sup>Optional</sup> <a name="localDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentAdministrationRoleArn"></a>

```java
public java.lang.String getLocalDeploymentAdministrationRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}.

---

##### `localDeploymentExecutionRoleName`<sup>Optional</sup> <a name="localDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentExecutionRoleName"></a>

```java
public java.lang.String getLocalDeploymentExecutionRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}.

---

##### `typeVersion`<sup>Optional</sup> <a name="typeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.typeVersion"></a>

```java
public java.lang.String getTypeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}.

---

### SsmquicksetupConfigurationManagerStatusSummaries <a name="SsmquicksetupConfigurationManagerStatusSummaries" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerStatusSummaries;

SsmquicksetupConfigurationManagerStatusSummaries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SsmquicksetupConfigurationManagerConfigurationDefinitionsList <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionsList" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList;

new SsmquicksetupConfigurationManagerConfigurationDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get"></a>

```java
public SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmquicksetupConfigurationManagerConfigurationDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>>

---


### SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference;

new SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentAdministrationRoleArn">resetLocalDeploymentAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentExecutionRoleName">resetLocalDeploymentExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetTypeVersion">resetTypeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetLocalDeploymentAdministrationRoleArn` <a name="resetLocalDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentAdministrationRoleArn"></a>

```java
public void resetLocalDeploymentAdministrationRoleArn()
```

##### `resetLocalDeploymentExecutionRoleName` <a name="resetLocalDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentExecutionRoleName"></a>

```java
public void resetLocalDeploymentExecutionRoleName()
```

##### `resetTypeVersion` <a name="resetTypeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetTypeVersion"></a>

```java
public void resetTypeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArnInput">localDeploymentAdministrationRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleNameInput">localDeploymentExecutionRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersionInput">typeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn">localDeploymentAdministrationRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName">localDeploymentExecutionRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion">typeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localDeploymentAdministrationRoleArnInput`<sup>Optional</sup> <a name="localDeploymentAdministrationRoleArnInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArnInput"></a>

```java
public java.lang.String getLocalDeploymentAdministrationRoleArnInput();
```

- *Type:* java.lang.String

---

##### `localDeploymentExecutionRoleNameInput`<sup>Optional</sup> <a name="localDeploymentExecutionRoleNameInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleNameInput"></a>

```java
public java.lang.String getLocalDeploymentExecutionRoleNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `typeVersionInput`<sup>Optional</sup> <a name="typeVersionInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersionInput"></a>

```java
public java.lang.String getTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localDeploymentAdministrationRoleArn`<sup>Required</sup> <a name="localDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```java
public java.lang.String getLocalDeploymentAdministrationRoleArn();
```

- *Type:* java.lang.String

---

##### `localDeploymentExecutionRoleName`<sup>Required</sup> <a name="localDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName"></a>

```java
public java.lang.String getLocalDeploymentExecutionRoleName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `typeVersion`<sup>Required</sup> <a name="typeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion"></a>

```java
public java.lang.String getTypeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>

---


### SsmquicksetupConfigurationManagerStatusSummariesList <a name="SsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerStatusSummariesList;

new SsmquicksetupConfigurationManagerStatusSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```java
public SsmquicksetupConfigurationManagerStatusSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="SsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmquicksetup_configuration_manager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference;

new SsmquicksetupConfigurationManagerStatusSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails">statusDetails</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">statusType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails"></a>

```java
public StringMap getStatusDetails();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `statusType`<sup>Required</sup> <a name="statusType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```java
public java.lang.String getStatusType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```java
public SsmquicksetupConfigurationManagerStatusSummaries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a>

---



