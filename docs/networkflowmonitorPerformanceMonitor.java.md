# `networkflowmonitorPerformanceMonitor` Submodule <a name="`networkflowmonitorPerformanceMonitor` Submodule" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorPerformanceMonitor <a name="NetworkflowmonitorPerformanceMonitor" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor awscc_networkflowmonitor_performance_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitor;

NetworkflowmonitorPerformanceMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorName(java.lang.String)
    .targets(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets>)
//  .scopeArn(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.monitorName">monitorName</a></code> | <code>java.lang.String</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>></code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scopeArn">scopeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>></code> | The tags for the performance monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.monitorName"></a>

- *Type:* java.lang.String

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.targets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>>

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `scopeArn`<sup>Optional</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.scopeArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>>

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn">resetScopeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>>

---

##### `resetScopeArn` <a name="resetScopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetScopeArn"></a>

```java
public void resetScopeArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitor;

NetworkflowmonitorPerformanceMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitor;

NetworkflowmonitorPerformanceMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitor;

NetworkflowmonitorPerformanceMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitor;

NetworkflowmonitorPerformanceMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkflowmonitorPerformanceMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkflowmonitorPerformanceMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkflowmonitorPerformanceMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkflowmonitorPerformanceMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorPerformanceMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus">monitorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput">monitorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput">scopeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName">monitorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn">scopeArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `monitorStatus`<sup>Required</sup> <a name="monitorStatus" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorStatus"></a>

```java
public java.lang.String getMonitorStatus();
```

- *Type:* java.lang.String

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tags"></a>

```java
public NetworkflowmonitorPerformanceMonitorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList">NetworkflowmonitorPerformanceMonitorTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targets"></a>

```java
public NetworkflowmonitorPerformanceMonitorTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList">NetworkflowmonitorPerformanceMonitorTargetsList</a>

---

##### `monitorNameInput`<sup>Optional</sup> <a name="monitorNameInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorNameInput"></a>

```java
public java.lang.String getMonitorNameInput();
```

- *Type:* java.lang.String

---

##### `scopeArnInput`<sup>Optional</sup> <a name="scopeArnInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArnInput"></a>

```java
public java.lang.String getScopeArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.targetsInput"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>>

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.monitorName"></a>

```java
public java.lang.String getMonitorName();
```

- *Type:* java.lang.String

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.scopeArn"></a>

```java
public java.lang.String getScopeArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorPerformanceMonitorConfig <a name="NetworkflowmonitorPerformanceMonitorConfig" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorConfig;

NetworkflowmonitorPerformanceMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .monitorName(java.lang.String)
    .targets(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets>)
//  .scopeArn(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName">monitorName</a></code> | <code>java.lang.String</code> | The name of the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>></code> | The targets that are monitored by the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn">scopeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the scope for the performance monitor. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>></code> | The tags for the performance monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.monitorName"></a>

```java
public java.lang.String getMonitorName();
```

- *Type:* java.lang.String

The name of the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#monitor_name NetworkflowmonitorPerformanceMonitor#monitor_name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.targets"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>>

The targets that are monitored by the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#targets NetworkflowmonitorPerformanceMonitor#targets}

---

##### `scopeArn`<sup>Optional</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.scopeArn"></a>

```java
public java.lang.String getScopeArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the scope for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#scope_arn NetworkflowmonitorPerformanceMonitor#scope_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>>

The tags for the performance monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#tags NetworkflowmonitorPerformanceMonitor#tags}

---

### NetworkflowmonitorPerformanceMonitorTags <a name="NetworkflowmonitorPerformanceMonitorTags" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTags;

NetworkflowmonitorPerformanceMonitorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#key NetworkflowmonitorPerformanceMonitor#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#value NetworkflowmonitorPerformanceMonitor#value}.

---

### NetworkflowmonitorPerformanceMonitorTargets <a name="NetworkflowmonitorPerformanceMonitorTargets" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTargets;

NetworkflowmonitorPerformanceMonitorTargets.builder()
    .identifier(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier of the target. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type">type</a></code> | <code>java.lang.String</code> | The type of the target. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The identifier of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#identifier NetworkflowmonitorPerformanceMonitor#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/networkflowmonitor_performance_monitor#type NetworkflowmonitorPerformanceMonitor#type}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorPerformanceMonitorTagsList <a name="NetworkflowmonitorPerformanceMonitorTagsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTagsList;

new NetworkflowmonitorPerformanceMonitorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get"></a>

```java
public NetworkflowmonitorPerformanceMonitorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>>

---


### NetworkflowmonitorPerformanceMonitorTagsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTagsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference;

new NetworkflowmonitorPerformanceMonitorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkflowmonitorPerformanceMonitorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTags">NetworkflowmonitorPerformanceMonitorTags</a>

---


### NetworkflowmonitorPerformanceMonitorTargetsList <a name="NetworkflowmonitorPerformanceMonitorTargetsList" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTargetsList;

new NetworkflowmonitorPerformanceMonitorTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get"></a>

```java
public NetworkflowmonitorPerformanceMonitorTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkflowmonitorPerformanceMonitorTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>>

---


### NetworkflowmonitorPerformanceMonitorTargetsOutputReference <a name="NetworkflowmonitorPerformanceMonitorTargetsOutputReference" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkflowmonitor_performance_monitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference;

new NetworkflowmonitorPerformanceMonitorTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkflowmonitorPerformanceMonitorTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkflowmonitorPerformanceMonitor.NetworkflowmonitorPerformanceMonitorTargets">NetworkflowmonitorPerformanceMonitorTargets</a>

---



