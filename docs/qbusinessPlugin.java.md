# `qbusinessPlugin` Submodule <a name="`qbusinessPlugin` Submodule" id="@cdktn/provider-awscc.qbusinessPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessPlugin <a name="QbusinessPlugin" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin awscc_qbusiness_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPlugin;

QbusinessPlugin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authConfiguration(QbusinessPluginAuthConfiguration)
    .displayName(java.lang.String)
    .type(java.lang.String)
//  .applicationId(java.lang.String)
//  .customPluginConfiguration(QbusinessPluginCustomPluginConfiguration)
//  .serverUrl(java.lang.String)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessPluginTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.customPluginConfiguration">customPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.authConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}.

---

##### `customPluginConfiguration`<sup>Optional</sup> <a name="customPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.customPluginConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}.

---

##### `serverUrl`<sup>Optional</sup> <a name="serverUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.serverUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration">putAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration">putCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration">resetCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl">resetServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfiguration` <a name="putAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration"></a>

```java
public void putAuthConfiguration(QbusinessPluginAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---

##### `putCustomPluginConfiguration` <a name="putCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration"></a>

```java
public void putCustomPluginConfiguration(QbusinessPluginCustomPluginConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putCustomPluginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QbusinessPluginTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>>

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetCustomPluginConfiguration` <a name="resetCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetCustomPluginConfiguration"></a>

```java
public void resetCustomPluginConfiguration()
```

##### `resetServerUrl` <a name="resetServerUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetServerUrl"></a>

```java
public void resetServerUrl()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPlugin;

QbusinessPlugin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPlugin;

QbusinessPlugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPlugin;

QbusinessPlugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPlugin;

QbusinessPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QbusinessPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QbusinessPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QbusinessPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QbusinessPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus">buildStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration">customPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn">pluginArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput">authConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput">customPluginConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput">serverUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfiguration"></a>

```java
public QbusinessPluginAuthConfigurationOutputReference getAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationOutputReference</a>

---

##### `buildStatus`<sup>Required</sup> <a name="buildStatus" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.buildStatus"></a>

```java
public java.lang.String getBuildStatus();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customPluginConfiguration`<sup>Required</sup> <a name="customPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfiguration"></a>

```java
public QbusinessPluginCustomPluginConfigurationOutputReference getCustomPluginConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference">QbusinessPluginCustomPluginConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pluginArn`<sup>Required</sup> <a name="pluginArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginArn"></a>

```java
public java.lang.String getPluginArn();
```

- *Type:* java.lang.String

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tags"></a>

```java
public QbusinessPluginTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList">QbusinessPluginTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `authConfigurationInput`<sup>Optional</sup> <a name="authConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.authConfigurationInput"></a>

```java
public IResolvable|QbusinessPluginAuthConfiguration getAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---

##### `customPluginConfigurationInput`<sup>Optional</sup> <a name="customPluginConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.customPluginConfigurationInput"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfiguration getCustomPluginConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `serverUrlInput`<sup>Optional</sup> <a name="serverUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrlInput"></a>

```java
public java.lang.String getServerUrlInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QbusinessPluginTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPlugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessPluginAuthConfiguration <a name="QbusinessPluginAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfiguration;

QbusinessPluginAuthConfiguration.builder()
//  .basicAuthConfiguration(QbusinessPluginAuthConfigurationBasicAuthConfiguration)
//  .noAuthConfiguration(java.lang.String)
//  .oAuth2ClientCredentialConfiguration(QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration">basicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration">noAuthConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration">oAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}. |

---

##### `basicAuthConfiguration`<sup>Optional</sup> <a name="basicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.basicAuthConfiguration"></a>

```java
public QbusinessPluginAuthConfigurationBasicAuthConfiguration getBasicAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#basic_auth_configuration QbusinessPlugin#basic_auth_configuration}.

---

##### `noAuthConfiguration`<sup>Optional</sup> <a name="noAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.noAuthConfiguration"></a>

```java
public java.lang.String getNoAuthConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#no_auth_configuration QbusinessPlugin#no_auth_configuration}.

---

##### `oAuth2ClientCredentialConfiguration`<sup>Optional</sup> <a name="oAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration.property.oAuth2ClientCredentialConfiguration"></a>

```java
public QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration getOAuth2ClientCredentialConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#o_auth_2_client_credential_configuration QbusinessPlugin#o_auth_2_client_credential_configuration}.

---

### QbusinessPluginAuthConfigurationBasicAuthConfiguration <a name="QbusinessPluginAuthConfigurationBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration;

QbusinessPluginAuthConfigurationBasicAuthConfiguration.builder()
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration;

QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.builder()
//  .authorizationUrl(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
//  .tokenUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}. |

---

##### `authorizationUrl`<sup>Optional</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#authorization_url QbusinessPlugin#authorization_url}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#role_arn QbusinessPlugin#role_arn}.

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#secret_arn QbusinessPlugin#secret_arn}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#token_url QbusinessPlugin#token_url}.

---

### QbusinessPluginConfig <a name="QbusinessPluginConfig" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginConfig;

QbusinessPluginConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authConfiguration(QbusinessPluginAuthConfiguration)
    .displayName(java.lang.String)
    .type(java.lang.String)
//  .applicationId(java.lang.String)
//  .customPluginConfiguration(QbusinessPluginCustomPluginConfiguration)
//  .serverUrl(java.lang.String)
//  .state(java.lang.String)
//  .tags(IResolvable|java.util.List<QbusinessPluginTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration">authConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration">customPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authConfiguration`<sup>Required</sup> <a name="authConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.authConfiguration"></a>

```java
public QbusinessPluginAuthConfiguration getAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#auth_configuration QbusinessPlugin#auth_configuration}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#display_name QbusinessPlugin#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#type QbusinessPlugin#type}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#application_id QbusinessPlugin#application_id}.

---

##### `customPluginConfiguration`<sup>Optional</sup> <a name="customPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.customPluginConfiguration"></a>

```java
public QbusinessPluginCustomPluginConfiguration getCustomPluginConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#custom_plugin_configuration QbusinessPlugin#custom_plugin_configuration}.

---

##### `serverUrl`<sup>Optional</sup> <a name="serverUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#server_url QbusinessPlugin#server_url}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#state QbusinessPlugin#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QbusinessPluginTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#tags QbusinessPlugin#tags}.

---

### QbusinessPluginCustomPluginConfiguration <a name="QbusinessPluginCustomPluginConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfiguration;

QbusinessPluginCustomPluginConfiguration.builder()
//  .apiSchema(QbusinessPluginCustomPluginConfigurationApiSchema)
//  .apiSchemaType(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType">apiSchemaType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}. |

---

##### `apiSchema`<sup>Optional</sup> <a name="apiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchema"></a>

```java
public QbusinessPluginCustomPluginConfigurationApiSchema getApiSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#api_schema QbusinessPlugin#api_schema}.

---

##### `apiSchemaType`<sup>Optional</sup> <a name="apiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.apiSchemaType"></a>

```java
public java.lang.String getApiSchemaType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#api_schema_type QbusinessPlugin#api_schema_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#description QbusinessPlugin#description}.

---

### QbusinessPluginCustomPluginConfigurationApiSchema <a name="QbusinessPluginCustomPluginConfigurationApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfigurationApiSchema;

QbusinessPluginCustomPluginConfigurationApiSchema.builder()
//  .payload(java.lang.String)
//  .s3(QbusinessPluginCustomPluginConfigurationApiSchemaS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload">payload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}. |

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#payload QbusinessPlugin#payload}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema.property.s3"></a>

```java
public QbusinessPluginCustomPluginConfigurationApiSchemaS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#s3 QbusinessPlugin#s3}.

---

### QbusinessPluginCustomPluginConfigurationApiSchemaS3 <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3;

QbusinessPluginCustomPluginConfigurationApiSchemaS3.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#bucket QbusinessPlugin#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

### QbusinessPluginTags <a name="QbusinessPluginTags" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginTags;

QbusinessPluginTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#key QbusinessPlugin#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_plugin#value QbusinessPlugin#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference;

new QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginAuthConfigurationBasicAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---


### QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference;

new QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl">resetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationUrl` <a name="resetAuthorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetAuthorizationUrl"></a>

```java
public void resetAuthorizationUrl()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resetTokenUrl"></a>

```java
public void resetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput">authorizationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationUrlInput`<sup>Optional</sup> <a name="authorizationUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrlInput"></a>

```java
public java.lang.String getAuthorizationUrlInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---


### QbusinessPluginAuthConfigurationOutputReference <a name="QbusinessPluginAuthConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginAuthConfigurationOutputReference;

new QbusinessPluginAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration">putBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration">putOAuth2ClientCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration">resetBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration">resetNoAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration">resetOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthConfiguration` <a name="putBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration"></a>

```java
public void putBasicAuthConfiguration(QbusinessPluginAuthConfigurationBasicAuthConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putBasicAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---

##### `putOAuth2ClientCredentialConfiguration` <a name="putOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration"></a>

```java
public void putOAuth2ClientCredentialConfiguration(QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.putOAuth2ClientCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---

##### `resetBasicAuthConfiguration` <a name="resetBasicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetBasicAuthConfiguration"></a>

```java
public void resetBasicAuthConfiguration()
```

##### `resetNoAuthConfiguration` <a name="resetNoAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetNoAuthConfiguration"></a>

```java
public void resetNoAuthConfiguration()
```

##### `resetOAuth2ClientCredentialConfiguration` <a name="resetOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.resetOAuth2ClientCredentialConfiguration"></a>

```java
public void resetOAuth2ClientCredentialConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration">basicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration">oAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput">basicAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput">noAuthConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput">oAuth2ClientCredentialConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration">noAuthConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuthConfiguration`<sup>Required</sup> <a name="basicAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration"></a>

```java
public QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference getBasicAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">QbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a>

---

##### `oAuth2ClientCredentialConfiguration`<sup>Required</sup> <a name="oAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration"></a>

```java
public QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference getOAuth2ClientCredentialConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a>

---

##### `basicAuthConfigurationInput`<sup>Optional</sup> <a name="basicAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfigurationInput"></a>

```java
public IResolvable|QbusinessPluginAuthConfigurationBasicAuthConfiguration getBasicAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationBasicAuthConfiguration">QbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---

##### `noAuthConfigurationInput`<sup>Optional</sup> <a name="noAuthConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfigurationInput"></a>

```java
public java.lang.String getNoAuthConfigurationInput();
```

- *Type:* java.lang.String

---

##### `oAuth2ClientCredentialConfigurationInput`<sup>Optional</sup> <a name="oAuth2ClientCredentialConfigurationInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfigurationInput"></a>

```java
public IResolvable|QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration getOAuth2ClientCredentialConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">QbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---

##### `noAuthConfiguration`<sup>Required</sup> <a name="noAuthConfiguration" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration"></a>

```java
public java.lang.String getNoAuthConfiguration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginAuthConfiguration">QbusinessPluginAuthConfiguration</a>

---


### QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference;

new QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3"></a>

```java
public void putS3(QbusinessPluginCustomPluginConfigurationApiSchemaS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---

##### `resetPayload` <a name="resetPayload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input">s3Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3"></a>

```java
public QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3Input"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfigurationApiSchemaS3 getS3Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfigurationApiSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---


### QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference <a name="QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference;

new QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfigurationApiSchemaS3 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaS3">QbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---


### QbusinessPluginCustomPluginConfigurationOutputReference <a name="QbusinessPluginCustomPluginConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginCustomPluginConfigurationOutputReference;

new QbusinessPluginCustomPluginConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema">putApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema">resetApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType">resetApiSchemaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiSchema` <a name="putApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema"></a>

```java
public void putApiSchema(QbusinessPluginCustomPluginConfigurationApiSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.putApiSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---

##### `resetApiSchema` <a name="resetApiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchema"></a>

```java
public void resetApiSchema()
```

##### `resetApiSchemaType` <a name="resetApiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetApiSchemaType"></a>

```java
public void resetApiSchemaType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema">apiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput">apiSchemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput">apiSchemaTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType">apiSchemaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiSchema`<sup>Required</sup> <a name="apiSchema" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema"></a>

```java
public QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference getApiSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">QbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a>

---

##### `apiSchemaInput`<sup>Optional</sup> <a name="apiSchemaInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaInput"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfigurationApiSchema getApiSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationApiSchema">QbusinessPluginCustomPluginConfigurationApiSchema</a>

---

##### `apiSchemaTypeInput`<sup>Optional</sup> <a name="apiSchemaTypeInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaTypeInput"></a>

```java
public java.lang.String getApiSchemaTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `apiSchemaType`<sup>Required</sup> <a name="apiSchemaType" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType"></a>

```java
public java.lang.String getApiSchemaType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginCustomPluginConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginCustomPluginConfiguration">QbusinessPluginCustomPluginConfiguration</a>

---


### QbusinessPluginTagsList <a name="QbusinessPluginTagsList" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginTagsList;

new QbusinessPluginTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get"></a>

```java
public QbusinessPluginTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QbusinessPluginTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>>

---


### QbusinessPluginTagsOutputReference <a name="QbusinessPluginTagsOutputReference" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.qbusiness_plugin.QbusinessPluginTagsOutputReference;

new QbusinessPluginTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QbusinessPluginTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.qbusinessPlugin.QbusinessPluginTags">QbusinessPluginTags</a>

---



