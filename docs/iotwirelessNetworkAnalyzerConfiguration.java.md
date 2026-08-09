# `iotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`iotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessNetworkAnalyzerConfiguration <a name="IotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfiguration;

IotwirelessNetworkAnalyzerConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags>)
//  .traceContent(IotwirelessNetworkAnalyzerConfigurationTraceContent)
//  .wirelessDevices(java.util.List<java.lang.String>)
//  .wirelessGateways(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessDevices">wirelessDevices</a></code> | <code>java.util.List<java.lang.String></code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessGateways">wirelessGateways</a></code> | <code>java.util.List<java.lang.String></code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `traceContent`<sup>Optional</sup> <a name="traceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.traceContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `wirelessDevices`<sup>Optional</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessDevices"></a>

- *Type:* java.util.List<java.lang.String>

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `wirelessGateways`<sup>Optional</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.wirelessGateways"></a>

- *Type:* java.util.List<java.lang.String>

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent">putTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent">resetTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices">resetWirelessDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways">resetWirelessGateways</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>>

---

##### `putTraceContent` <a name="putTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent"></a>

```java
public void putTraceContent(IotwirelessNetworkAnalyzerConfigurationTraceContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.putTraceContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTraceContent` <a name="resetTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetTraceContent"></a>

```java
public void resetTraceContent()
```

##### `resetWirelessDevices` <a name="resetWirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessDevices"></a>

```java
public void resetWirelessDevices()
```

##### `resetWirelessGateways` <a name="resetWirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.resetWirelessGateways"></a>

```java
public void resetWirelessGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfiguration;

IotwirelessNetworkAnalyzerConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfiguration;

IotwirelessNetworkAnalyzerConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfiguration;

IotwirelessNetworkAnalyzerConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfiguration;

IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessNetworkAnalyzerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput">traceContentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput">wirelessDevicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput">wirelessGatewaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">wirelessDevices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">wirelessGateways</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```java
public IotwirelessNetworkAnalyzerConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList">IotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `traceContent`<sup>Required</sup> <a name="traceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```java
public IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference getTraceContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>>

---

##### `traceContentInput`<sup>Optional</sup> <a name="traceContentInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.traceContentInput"></a>

```java
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTraceContent getTraceContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---

##### `wirelessDevicesInput`<sup>Optional</sup> <a name="wirelessDevicesInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevicesInput"></a>

```java
public java.util.List<java.lang.String> getWirelessDevicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `wirelessGatewaysInput`<sup>Optional</sup> <a name="wirelessGatewaysInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGatewaysInput"></a>

```java
public java.util.List<java.lang.String> getWirelessGatewaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `wirelessDevices`<sup>Required</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```java
public java.util.List<java.lang.String> getWirelessDevices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `wirelessGateways`<sup>Required</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```java
public java.util.List<java.lang.String> getWirelessGateways();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessNetworkAnalyzerConfigurationConfig <a name="IotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationConfig;

IotwirelessNetworkAnalyzerConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags>)
//  .traceContent(IotwirelessNetworkAnalyzerConfigurationTraceContent)
//  .wirelessDevices(java.util.List<java.lang.String>)
//  .wirelessGateways(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the new resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent">traceContent</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | Trace content for your wireless gateway and wireless device resources. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices">wirelessDevices</a></code> | <code>java.util.List<java.lang.String></code> | List of wireless gateway resources that have been added to the network analyzer configuration. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways">wirelessGateways</a></code> | <code>java.util.List<java.lang.String></code> | List of wireless gateway resources that have been added to the network analyzer configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#name IotwirelessNetworkAnalyzerConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#description IotwirelessNetworkAnalyzerConfiguration#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#tags IotwirelessNetworkAnalyzerConfiguration#tags}

---

##### `traceContent`<sup>Optional</sup> <a name="traceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.traceContent"></a>

```java
public IotwirelessNetworkAnalyzerConfigurationTraceContent getTraceContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

Trace content for your wireless gateway and wireless device resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#trace_content IotwirelessNetworkAnalyzerConfiguration#trace_content}

---

##### `wirelessDevices`<sup>Optional</sup> <a name="wirelessDevices" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessDevices"></a>

```java
public java.util.List<java.lang.String> getWirelessDevices();
```

- *Type:* java.util.List<java.lang.String>

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_devices IotwirelessNetworkAnalyzerConfiguration#wireless_devices}

---

##### `wirelessGateways`<sup>Optional</sup> <a name="wirelessGateways" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationConfig.property.wirelessGateways"></a>

```java
public java.util.List<java.lang.String> getWirelessGateways();
```

- *Type:* java.util.List<java.lang.String>

List of wireless gateway resources that have been added to the network analyzer configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_gateways IotwirelessNetworkAnalyzerConfiguration#wireless_gateways}

---

### IotwirelessNetworkAnalyzerConfigurationTags <a name="IotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationTags;

IotwirelessNetworkAnalyzerConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#key IotwirelessNetworkAnalyzerConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#value IotwirelessNetworkAnalyzerConfiguration#value}

---

### IotwirelessNetworkAnalyzerConfigurationTraceContent <a name="IotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationTraceContent;

IotwirelessNetworkAnalyzerConfigurationTraceContent.builder()
//  .logLevel(java.lang.String)
//  .wirelessDeviceFrameInfo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo">wirelessDeviceFrameInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#log_level IotwirelessNetworkAnalyzerConfiguration#log_level}.

---

##### `wirelessDeviceFrameInfo`<sup>Optional</sup> <a name="wirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent.property.wirelessDeviceFrameInfo"></a>

```java
public java.lang.String getWirelessDeviceFrameInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotwireless_network_analyzer_configuration#wireless_device_frame_info IotwirelessNetworkAnalyzerConfiguration#wireless_device_frame_info}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessNetworkAnalyzerConfigurationTagsList <a name="IotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationTagsList;

new IotwirelessNetworkAnalyzerConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```java
public IotwirelessNetworkAnalyzerConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessNetworkAnalyzerConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>>

---


### IotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference;

new IotwirelessNetworkAnalyzerConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTags">IotwirelessNetworkAnalyzerConfigurationTags</a>

---


### IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_network_analyzer_configuration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference;

new IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo">resetWirelessDeviceFrameInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetWirelessDeviceFrameInfo` <a name="resetWirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resetWirelessDeviceFrameInfo"></a>

```java
public void resetWirelessDeviceFrameInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput">wirelessDeviceFrameInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">wirelessDeviceFrameInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `wirelessDeviceFrameInfoInput`<sup>Optional</sup> <a name="wirelessDeviceFrameInfoInput" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfoInput"></a>

```java
public java.lang.String getWirelessDeviceFrameInfoInput();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `wirelessDeviceFrameInfo`<sup>Required</sup> <a name="wirelessDeviceFrameInfo" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```java
public java.lang.String getWirelessDeviceFrameInfo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessNetworkAnalyzerConfigurationTraceContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessNetworkAnalyzerConfiguration.IotwirelessNetworkAnalyzerConfigurationTraceContent">IotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



