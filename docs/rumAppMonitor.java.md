# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktn/provider-awscc.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitor;

RumAppMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appMonitorConfiguration(RumAppMonitorAppMonitorConfiguration)
//  .customEvents(RumAppMonitorCustomEvents)
//  .cwLogEnabled(java.lang.Boolean|IResolvable)
//  .deobfuscationConfiguration(RumAppMonitorDeobfuscationConfiguration)
//  .domain(java.lang.String)
//  .domainList(java.util.List<java.lang.String>)
//  .platform(java.lang.String)
//  .resourcePolicy(RumAppMonitorResourcePolicy)
//  .tags(IResolvable|java.util.List<RumAppMonitorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domainList">domainList</a></code> | <code>java.util.List<java.lang.String></code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>></code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `appMonitorConfiguration`<sup>Optional</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `customEvents`<sup>Optional</sup> <a name="customEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cwLogEnabled`<sup>Optional</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `deobfuscationConfiguration`<sup>Optional</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.deobfuscationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `domainList`<sup>Optional</sup> <a name="domainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domainList"></a>

- *Type:* java.util.List<java.lang.String>

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.platform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>>

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">putAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents">putCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration">putDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy">putResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">resetAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents">resetCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">resetCwLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration">resetDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList">resetDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy">resetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppMonitorConfiguration` <a name="putAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```java
public void putAppMonitorConfiguration(RumAppMonitorAppMonitorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `putCustomEvents` <a name="putCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```java
public void putCustomEvents(RumAppMonitorCustomEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `putDeobfuscationConfiguration` <a name="putDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration"></a>

```java
public void putDeobfuscationConfiguration(RumAppMonitorDeobfuscationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `putResourcePolicy` <a name="putResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy"></a>

```java
public void putResourcePolicy(RumAppMonitorResourcePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RumAppMonitorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>>

---

##### `resetAppMonitorConfiguration` <a name="resetAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```java
public void resetAppMonitorConfiguration()
```

##### `resetCustomEvents` <a name="resetCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```java
public void resetCustomEvents()
```

##### `resetCwLogEnabled` <a name="resetCwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```java
public void resetCwLogEnabled()
```

##### `resetDeobfuscationConfiguration` <a name="resetDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration"></a>

```java
public void resetDeobfuscationConfiguration()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomainList` <a name="resetDomainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList"></a>

```java
public void resetDomainList()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetResourcePolicy` <a name="resetResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy"></a>

```java
public void resetResourcePolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitor;

RumAppMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RumAppMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RumAppMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId">appMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">appMonitorConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput">customEventsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">cwLogEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput">deobfuscationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput">domainListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput">resourcePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList">domainList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appMonitorConfiguration`<sup>Required</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```java
public RumAppMonitorAppMonitorConfigurationOutputReference getAppMonitorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `appMonitorId`<sup>Required</sup> <a name="appMonitorId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```java
public java.lang.String getAppMonitorId();
```

- *Type:* java.lang.String

---

##### `customEvents`<sup>Required</sup> <a name="customEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```java
public RumAppMonitorCustomEventsOutputReference getCustomEvents();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `deobfuscationConfiguration`<sup>Required</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration"></a>

```java
public RumAppMonitorDeobfuscationConfigurationOutputReference getDeobfuscationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourcePolicy`<sup>Required</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy"></a>

```java
public RumAppMonitorResourcePolicyOutputReference getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags"></a>

```java
public RumAppMonitorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a>

---

##### `appMonitorConfigurationInput`<sup>Optional</sup> <a name="appMonitorConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```java
public IResolvable|RumAppMonitorAppMonitorConfiguration getAppMonitorConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `customEventsInput`<sup>Optional</sup> <a name="customEventsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```java
public IResolvable|RumAppMonitorCustomEvents getCustomEventsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `cwLogEnabledInput`<sup>Optional</sup> <a name="cwLogEnabledInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCwLogEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deobfuscationConfigurationInput`<sup>Optional</sup> <a name="deobfuscationConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput"></a>

```java
public IResolvable|RumAppMonitorDeobfuscationConfiguration getDeobfuscationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainListInput`<sup>Optional</sup> <a name="domainListInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput"></a>

```java
public java.util.List<java.lang.String> getDomainListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `resourcePolicyInput`<sup>Optional</sup> <a name="resourcePolicyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput"></a>

```java
public IResolvable|RumAppMonitorResourcePolicy getResourcePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RumAppMonitorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>>

---

##### `cwLogEnabled`<sup>Required</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCwLogEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainList`<sup>Required</sup> <a name="domainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList"></a>

```java
public java.util.List<java.lang.String> getDomainList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfiguration;

RumAppMonitorAppMonitorConfiguration.builder()
//  .allowCookies(java.lang.Boolean|IResolvable)
//  .enableXRay(java.lang.Boolean|IResolvable)
//  .excludedPages(java.util.List<java.lang.String>)
//  .favoritePages(java.util.List<java.lang.String>)
//  .guestRoleArn(java.lang.String)
//  .identityPoolId(java.lang.String)
//  .includedPages(java.util.List<java.lang.String>)
//  .metricDestinations(IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinations>)
//  .sessionSampleRate(java.lang.Number)
//  .telemetries(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">allowCookies</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay">enableXRay</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">excludedPages</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs in your website or application to exclude from RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">favoritePages</a></code> | <code>java.util.List<java.lang.String></code> | A list of pages in the RUM console that are to be displayed with a favorite icon. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">guestRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | The ID of the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">includedPages</a></code> | <code>java.util.List<java.lang.String></code> | If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations">metricDestinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>></code> | An array of structures which define the destinations and the metrics that you want to send. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">sessionSampleRate</a></code> | <code>java.lang.Number</code> | Specifies the percentage of user sessions to use for RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">telemetries</a></code> | <code>java.util.List<java.lang.String></code> | An array that lists the types of telemetry data that this app monitor is to collect. |

---

##### `allowCookies`<sup>Optional</sup> <a name="allowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```java
public java.lang.Boolean|IResolvable getAllowCookies();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie.

The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}

---

##### `enableXRay`<sup>Optional</sup> <a name="enableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay"></a>

```java
public java.lang.Boolean|IResolvable getEnableXRay();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you set this to true, RUM enables xray tracing for the user sessions that RUM samples.

RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#enable_x_ray RumAppMonitor#enable_x_ray}

---

##### `excludedPages`<sup>Optional</sup> <a name="excludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```java
public java.util.List<java.lang.String> getExcludedPages();
```

- *Type:* java.util.List<java.lang.String>

A list of URLs in your website or application to exclude from RUM data collection.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}

---

##### `favoritePages`<sup>Optional</sup> <a name="favoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```java
public java.util.List<java.lang.String> getFavoritePages();
```

- *Type:* java.util.List<java.lang.String>

A list of pages in the RUM console that are to be displayed with a favorite icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}

---

##### `guestRoleArn`<sup>Optional</sup> <a name="guestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```java
public java.lang.String getGuestRoleArn();
```

- *Type:* java.lang.String

The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}

---

##### `identityPoolId`<sup>Optional</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

The ID of the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}

---

##### `includedPages`<sup>Optional</sup> <a name="includedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```java
public java.util.List<java.lang.String> getIncludedPages();
```

- *Type:* java.util.List<java.lang.String>

If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}

---

##### `metricDestinations`<sup>Optional</sup> <a name="metricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinations> getMetricDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>>

An array of structures which define the destinations and the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#metric_destinations RumAppMonitor#metric_destinations}

---

##### `sessionSampleRate`<sup>Optional</sup> <a name="sessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```java
public java.lang.Number getSessionSampleRate();
```

- *Type:* java.lang.Number

Specifies the percentage of user sessions to use for RUM data collection.

Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}

---

##### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```java
public java.util.List<java.lang.String> getTelemetries();
```

- *Type:* java.util.List<java.lang.String>

An array that lists the types of telemetry data that this app monitor is to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinations <a name="RumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinations;

RumAppMonitorAppMonitorConfigurationMetricDestinations.builder()
//  .destination(java.lang.String)
//  .destinationArn(java.lang.String)
//  .iamRoleArn(java.lang.String)
//  .metricDefinitions(IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination">destination</a></code> | <code>java.lang.String</code> | Defines the destination to send the metrics to. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions">metricDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>></code> | An array of structures which define the metrics that you want to send. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Defines the destination to send the metrics to.

Valid values are CloudWatch and Evidently. Note: Evidently has been discontinued and is no longer supported - requests with Evidently will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#destination RumAppMonitor#destination}

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#destination_arn RumAppMonitor#destination_arn}

---

##### `iamRoleArn`<sup>Optional</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#iam_role_arn RumAppMonitor#iam_role_arn}

---

##### `metricDefinitions`<sup>Optional</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions> getMetricDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>>

An array of structures which define the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#metric_definitions RumAppMonitor#metric_definitions}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions;

RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.builder()
//  .dimensionKeys(java.util.Map<java.lang.String, java.lang.String>)
//  .eventPattern(java.lang.String)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
//  .unitLabel(java.lang.String)
//  .valueKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys">dimensionKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Use this field only if you are sending the metric to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | The pattern that defines the metric, specified as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name">name</a></code> | <code>java.lang.String</code> | The name for the metric that is defined in this structure. For extended metrics, valid values are the following:. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace used by CloudWatch Metrics for the metric that is defined in this structure. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | The CloudWatch metric unit to use for this metric. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | The field within the event object that the metric value is sourced from. |

---

##### `dimensionKeys`<sup>Optional</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Use this field only if you are sending the metric to CloudWatch.

This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:

"metadata.pageId": "PageId"

"metadata.browserName": "BrowserName"

"metadata.deviceType": "DeviceType"

"metadata.osName": "OSName"

"metadata.countryCode": "CountryCode"

"event_details.fileType": "FileType"

All dimensions listed in this field must also be included in EventPattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#dimension_keys RumAppMonitor#dimension_keys}

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

The pattern that defines the metric, specified as a JSON object.

RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.

When you define extended metrics, the metric definition is not valid if EventPattern is omitted.

Example event patterns:

'{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'

If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#event_pattern RumAppMonitor#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for the metric that is defined in this structure. For extended metrics, valid values are the following:.

PerformanceNavigationDuration

PerformanceResourceDuration

NavigationSatisfiedTransaction

NavigationToleratedTransaction

NavigationFrustratedTransaction

WebVitalsCumulativeLayoutShift

WebVitalsFirstInputDelay

WebVitalsLargestContentfulPaint

WebVitalsInteractionToNextPaint

JsErrorCount

HttpErrorCount

SessionCount

PageViewCount

Http4xxCount

Http5xxCount

SessionDuration

PageViewCountPerSession

JsErrorCountPerSession

Http4xxCountPerSession

Http5xxCountPerSession

JsErrorCountPerPageView

Http4xxCountPerPageView

Http5xxCountPerPageView

TimeOnPage

ColdLaunchTime

WarmLaunchTime

CrashCount

ANRCount

AppHangCount

ScreenLoadCount

ScreenLoadTime

NetworkLatency

SpanPayloadSize

LogEventPayloadSize

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace used by CloudWatch Metrics for the metric that is defined in this structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#namespace RumAppMonitor#namespace}

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

The CloudWatch metric unit to use for this metric.

If you omit this field, the metric is recorded with no unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#unit_label RumAppMonitor#unit_label}

---

##### `valueKey`<sup>Optional</sup> <a name="valueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

The field within the event object that the metric value is sourced from.

If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.

If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event. Note: Evidently has been discontinued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#value_key RumAppMonitor#value_key}

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorConfig;

RumAppMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appMonitorConfiguration(RumAppMonitorAppMonitorConfiguration)
//  .customEvents(RumAppMonitorCustomEvents)
//  .cwLogEnabled(java.lang.Boolean|IResolvable)
//  .deobfuscationConfiguration(RumAppMonitorDeobfuscationConfiguration)
//  .domain(java.lang.String)
//  .domainList(java.util.List<java.lang.String>)
//  .platform(java.lang.String)
//  .resourcePolicy(RumAppMonitorResourcePolicy)
//  .tags(IResolvable|java.util.List<RumAppMonitorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents">customEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration">deobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList">domainList</a></code> | <code>java.util.List<java.lang.String></code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy">resourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>></code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `appMonitorConfiguration`<sup>Optional</sup> <a name="appMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```java
public RumAppMonitorAppMonitorConfiguration getAppMonitorConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `customEvents`<sup>Optional</sup> <a name="customEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```java
public RumAppMonitorCustomEvents getCustomEvents();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cwLogEnabled`<sup>Optional</sup> <a name="cwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCwLogEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `deobfuscationConfiguration`<sup>Optional</sup> <a name="deobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration"></a>

```java
public RumAppMonitorDeobfuscationConfiguration getDeobfuscationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `domainList`<sup>Optional</sup> <a name="domainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList"></a>

```java
public java.util.List<java.lang.String> getDomainList();
```

- *Type:* java.util.List<java.lang.String>

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `resourcePolicy`<sup>Optional</sup> <a name="resourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy"></a>

```java
public RumAppMonitorResourcePolicy getResourcePolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RumAppMonitorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>>

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorCustomEvents;

RumAppMonitorCustomEvents.builder()
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status">status</a></code> | <code>java.lang.String</code> | Indicates whether AppMonitor accepts custom events. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Indicates whether AppMonitor accepts custom events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorDeobfuscationConfiguration <a name="RumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorDeobfuscationConfiguration;

RumAppMonitorDeobfuscationConfiguration.builder()
//  .javaScriptSourceMaps(RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps">javaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps. |

---

##### `javaScriptSourceMaps`<sup>Optional</sup> <a name="javaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps"></a>

```java
public RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps getJavaScriptSourceMaps();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#java_script_source_maps RumAppMonitor#java_script_source_maps}

---

### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps;

RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.builder()
//  .s3Uri(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | The S3Uri of the bucket or folder that stores the source map files. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status">status</a></code> | <code>java.lang.String</code> | Specifies whether JavaScript error stack traces should be unminified for this app monitor. |

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

The S3Uri of the bucket or folder that stores the source map files.

It is required if status is ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#s3_uri RumAppMonitor#s3_uri}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Specifies whether JavaScript error stack traces should be unminified for this app monitor.

The default is for JavaScript error stack trace unminification to be DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorResourcePolicy <a name="RumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorResourcePolicy;

RumAppMonitorResourcePolicy.builder()
//  .policyDocument(java.lang.String)
//  .policyRevisionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | The JSON to use as the resource policy. The document can be up to 4 KB in size. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId">policyRevisionId</a></code> | <code>java.lang.String</code> | A string value that you can use to conditionally update your policy. |

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

The JSON to use as the resource policy. The document can be up to 4 KB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#policy_document RumAppMonitor#policy_document}

---

##### `policyRevisionId`<sup>Optional</sup> <a name="policyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId"></a>

```java
public java.lang.String getPolicyRevisionId();
```

- *Type:* java.lang.String

A string value that you can use to conditionally update your policy.

You can provide the revision ID of your existing policy to make mutating requests against that policy.

When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#policy_revision_id RumAppMonitor#policy_revision_id}

---

### RumAppMonitorTags <a name="RumAppMonitorTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorTags;

RumAppMonitorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#key RumAppMonitor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rum_app_monitor#value RumAppMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList;

new RumAppMonitorAppMonitorConfigurationMetricDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```java
public RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>>

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList;

new RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```java
public RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>>

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference;

new RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys">resetDimensionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern">resetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel">resetUnitLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey">resetValueKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionKeys` <a name="resetDimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys"></a>

```java
public void resetDimensionKeys()
```

##### `resetEventPattern` <a name="resetEventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern"></a>

```java
public void resetEventPattern()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetUnitLabel` <a name="resetUnitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel"></a>

```java
public void resetUnitLabel()
```

##### `resetValueKey` <a name="resetValueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey"></a>

```java
public void resetValueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput">dimensionKeysInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput">eventPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput">unitLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput">valueKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">dimensionKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">eventPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">unitLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">valueKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionKeysInput`<sup>Optional</sup> <a name="dimensionKeysInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionKeysInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `eventPatternInput`<sup>Optional</sup> <a name="eventPatternInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput"></a>

```java
public java.lang.String getEventPatternInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `unitLabelInput`<sup>Optional</sup> <a name="unitLabelInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput"></a>

```java
public java.lang.String getUnitLabelInput();
```

- *Type:* java.lang.String

---

##### `valueKeyInput`<sup>Optional</sup> <a name="valueKeyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput"></a>

```java
public java.lang.String getValueKeyInput();
```

- *Type:* java.lang.String

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```java
public java.lang.String getEventPattern();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `unitLabel`<sup>Required</sup> <a name="unitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```java
public java.lang.String getUnitLabel();
```

- *Type:* java.lang.String

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```java
public java.lang.String getValueKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference;

new RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions">putMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn">resetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions">resetMetricDefinitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDefinitions` <a name="putMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions"></a>

```java
public void putMetricDefinitions(IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetIamRoleArn` <a name="resetIamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn"></a>

```java
public void resetIamRoleArn()
```

##### `resetMetricDefinitions` <a name="resetMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions"></a>

```java
public void resetMetricDefinitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">metricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput">metricDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDefinitions`<sup>Required</sup> <a name="metricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```java
public RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList getMetricDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `metricDefinitionsInput`<sup>Optional</sup> <a name="metricDefinitionsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions> getMetricDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorAppMonitorConfigurationMetricDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorAppMonitorConfigurationOutputReference;

new RumAppMonitorAppMonitorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations">putMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">resetAllowCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay">resetEnableXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">resetExcludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">resetFavoritePages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">resetGuestRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">resetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">resetIncludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations">resetMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">resetSessionSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">resetTelemetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDestinations` <a name="putMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations"></a>

```java
public void putMetricDestinations(IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>>

---

##### `resetAllowCookies` <a name="resetAllowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```java
public void resetAllowCookies()
```

##### `resetEnableXRay` <a name="resetEnableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay"></a>

```java
public void resetEnableXRay()
```

##### `resetExcludedPages` <a name="resetExcludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```java
public void resetExcludedPages()
```

##### `resetFavoritePages` <a name="resetFavoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```java
public void resetFavoritePages()
```

##### `resetGuestRoleArn` <a name="resetGuestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```java
public void resetGuestRoleArn()
```

##### `resetIdentityPoolId` <a name="resetIdentityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```java
public void resetIdentityPoolId()
```

##### `resetIncludedPages` <a name="resetIncludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```java
public void resetIncludedPages()
```

##### `resetMetricDestinations` <a name="resetMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations"></a>

```java
public void resetMetricDestinations()
```

##### `resetSessionSampleRate` <a name="resetSessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```java
public void resetSessionSampleRate()
```

##### `resetTelemetries` <a name="resetTelemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```java
public void resetTelemetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">metricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">allowCookiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput">enableXRayInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">excludedPagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">favoritePagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">guestRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">includedPagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput">metricDestinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">sessionSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">telemetriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allowCookies</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">enableXRay</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excludedPages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favoritePages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guestRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">includedPages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">sessionSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricDestinations`<sup>Required</sup> <a name="metricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```java
public RumAppMonitorAppMonitorConfigurationMetricDestinationsList getMetricDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `allowCookiesInput`<sup>Optional</sup> <a name="allowCookiesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowCookiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableXRayInput`<sup>Optional</sup> <a name="enableXRayInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableXRayInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludedPagesInput`<sup>Optional</sup> <a name="excludedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `favoritePagesInput`<sup>Optional</sup> <a name="favoritePagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```java
public java.util.List<java.lang.String> getFavoritePagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guestRoleArnInput`<sup>Optional</sup> <a name="guestRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```java
public java.lang.String getGuestRoleArnInput();
```

- *Type:* java.lang.String

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `includedPagesInput`<sup>Optional</sup> <a name="includedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedPagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricDestinationsInput`<sup>Optional</sup> <a name="metricDestinationsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput"></a>

```java
public IResolvable|java.util.List<RumAppMonitorAppMonitorConfigurationMetricDestinations> getMetricDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>>

---

##### `sessionSampleRateInput`<sup>Optional</sup> <a name="sessionSampleRateInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```java
public java.lang.Number getSessionSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `telemetriesInput`<sup>Optional</sup> <a name="telemetriesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```java
public java.util.List<java.lang.String> getTelemetriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowCookies`<sup>Required</sup> <a name="allowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```java
public java.lang.Boolean|IResolvable getAllowCookies();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableXRay`<sup>Required</sup> <a name="enableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```java
public java.lang.Boolean|IResolvable getEnableXRay();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludedPages`<sup>Required</sup> <a name="excludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```java
public java.util.List<java.lang.String> getExcludedPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `favoritePages`<sup>Required</sup> <a name="favoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```java
public java.util.List<java.lang.String> getFavoritePages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guestRoleArn`<sup>Required</sup> <a name="guestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```java
public java.lang.String getGuestRoleArn();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `includedPages`<sup>Required</sup> <a name="includedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```java
public java.util.List<java.lang.String> getIncludedPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionSampleRate`<sup>Required</sup> <a name="sessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```java
public java.lang.Number getSessionSampleRate();
```

- *Type:* java.lang.Number

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```java
public java.util.List<java.lang.String> getTelemetries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorAppMonitorConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorCustomEventsOutputReference;

new RumAppMonitorCustomEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorCustomEvents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---


### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference;

new RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### RumAppMonitorDeobfuscationConfigurationOutputReference <a name="RumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorDeobfuscationConfigurationOutputReference;

new RumAppMonitorDeobfuscationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps">putJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps">resetJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJavaScriptSourceMaps` <a name="putJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps"></a>

```java
public void putJavaScriptSourceMaps(RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `resetJavaScriptSourceMaps` <a name="resetJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps"></a>

```java
public void resetJavaScriptSourceMaps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">javaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput">javaScriptSourceMapsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `javaScriptSourceMaps`<sup>Required</sup> <a name="javaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```java
public RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference getJavaScriptSourceMaps();
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `javaScriptSourceMapsInput`<sup>Optional</sup> <a name="javaScriptSourceMapsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput"></a>

```java
public IResolvable|RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps getJavaScriptSourceMapsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorDeobfuscationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---


### RumAppMonitorResourcePolicyOutputReference <a name="RumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorResourcePolicyOutputReference;

new RumAppMonitorResourcePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId">resetPolicyRevisionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```

##### `resetPolicyRevisionId` <a name="resetPolicyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId"></a>

```java
public void resetPolicyRevisionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput">policyRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">policyRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `policyRevisionIdInput`<sup>Optional</sup> <a name="policyRevisionIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput"></a>

```java
public java.lang.String getPolicyRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `policyRevisionId`<sup>Required</sup> <a name="policyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```java
public java.lang.String getPolicyRevisionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorResourcePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---


### RumAppMonitorTagsList <a name="RumAppMonitorTagsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorTagsList;

new RumAppMonitorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get"></a>

```java
public RumAppMonitorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RumAppMonitorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>>

---


### RumAppMonitorTagsOutputReference <a name="RumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rum_app_monitor.RumAppMonitorTagsOutputReference;

new RumAppMonitorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RumAppMonitorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>

---



