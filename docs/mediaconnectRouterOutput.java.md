# `mediaconnectRouterOutput` Submodule <a name="`mediaconnectRouterOutput` Submodule" id="@cdktn/provider-awscc.mediaconnectRouterOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectRouterOutput <a name="MediaconnectRouterOutput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutput;

MediaconnectRouterOutput.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(MediaconnectRouterOutputConfiguration)
    .maximumBitrate(java.lang.Number)
    .name(java.lang.String)
    .routingScope(java.lang.String)
    .tier(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .maintenanceConfiguration(MediaconnectRouterOutputMaintenanceConfiguration)
//  .regionName(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectRouterOutputTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a></code> | The configuration settings for a router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | The maximum bitrate for the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.routingScope">routingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone where you want to create the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a></code> | The configuration settings for maintenance operations, including preferred maintenance windows and schedules. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.regionName">regionName</a></code> | <code>java.lang.String</code> | The Amazon Web Services Region for the router output. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>></code> | Key-value pairs that can be used to tag this router output. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

The configuration settings for a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#configuration MediaconnectRouterOutput#configuration}

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.maximumBitrate"></a>

- *Type:* java.lang.Number

The maximum bitrate for the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maximum_bitrate MediaconnectRouterOutput#maximum_bitrate}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#name MediaconnectRouterOutput#name}

---

##### `routingScope`<sup>Required</sup> <a name="routingScope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.routingScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}.

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone where you want to create the router output.

This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#availability_zone MediaconnectRouterOutput#availability_zone}

---

##### `maintenanceConfiguration`<sup>Optional</sup> <a name="maintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.maintenanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

The configuration settings for maintenance operations, including preferred maintenance windows and schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maintenance_configuration MediaconnectRouterOutput#maintenance_configuration}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.regionName"></a>

- *Type:* java.lang.String

The Amazon Web Services Region for the router output. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#region_name MediaconnectRouterOutput#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>>

Key-value pairs that can be used to tag this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tags MediaconnectRouterOutput#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration">putMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetMaintenanceConfiguration">resetMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetRegionName">resetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration"></a>

```java
public void putConfiguration(MediaconnectRouterOutputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

---

##### `putMaintenanceConfiguration` <a name="putMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration"></a>

```java
public void putMaintenanceConfiguration(MediaconnectRouterOutputMaintenanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediaconnectRouterOutputTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetMaintenanceConfiguration` <a name="resetMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetMaintenanceConfiguration"></a>

```java
public void resetMaintenanceConfiguration()
```

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetRegionName"></a>

```java
public void resetRegionName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectRouterOutput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutput;

MediaconnectRouterOutput.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutput;

MediaconnectRouterOutput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutput;

MediaconnectRouterOutput.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutput;

MediaconnectRouterOutput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconnectRouterOutput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconnectRouterOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconnectRouterOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconnectRouterOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectRouterOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference">MediaconnectRouterOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference">MediaconnectRouterOutputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routedState">routedState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routerOutputId">routerOutputId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList">MediaconnectRouterOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfigurationInput">maintenanceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrateInput">maximumBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionNameInput">regionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScopeInput">routingScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScope">routingScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configuration"></a>

```java
public MediaconnectRouterOutputConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference">MediaconnectRouterOutputConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `maintenanceConfiguration`<sup>Required</sup> <a name="maintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfiguration"></a>

```java
public MediaconnectRouterOutputMaintenanceConfigurationOutputReference getMaintenanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference">MediaconnectRouterOutputMaintenanceConfigurationOutputReference</a>

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `routedState`<sup>Required</sup> <a name="routedState" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routedState"></a>

```java
public java.lang.String getRoutedState();
```

- *Type:* java.lang.String

---

##### `routerOutputId`<sup>Required</sup> <a name="routerOutputId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routerOutputId"></a>

```java
public java.lang.String getRouterOutputId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tags"></a>

```java
public MediaconnectRouterOutputTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList">MediaconnectRouterOutputTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

---

##### `maintenanceConfigurationInput`<sup>Optional</sup> <a name="maintenanceConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputMaintenanceConfiguration getMaintenanceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

---

##### `maximumBitrateInput`<sup>Optional</sup> <a name="maximumBitrateInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrateInput"></a>

```java
public java.lang.Number getMaximumBitrateInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionNameInput"></a>

```java
public java.lang.String getRegionNameInput();
```

- *Type:* java.lang.String

---

##### `routingScopeInput`<sup>Optional</sup> <a name="routingScopeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScopeInput"></a>

```java
public java.lang.String getRoutingScopeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediaconnectRouterOutputTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrate"></a>

```java
public java.lang.Number getMaximumBitrate();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `routingScope`<sup>Required</sup> <a name="routingScope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScope"></a>

```java
public java.lang.String getRoutingScope();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectRouterOutputConfig <a name="MediaconnectRouterOutputConfig" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfig;

MediaconnectRouterOutputConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuration(MediaconnectRouterOutputConfiguration)
    .maximumBitrate(java.lang.Number)
    .name(java.lang.String)
    .routingScope(java.lang.String)
    .tier(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .maintenanceConfiguration(MediaconnectRouterOutputMaintenanceConfiguration)
//  .regionName(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectRouterOutputTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a></code> | The configuration settings for a router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maximumBitrate">maximumBitrate</a></code> | <code>java.lang.Number</code> | The maximum bitrate for the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.routingScope">routingScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone where you want to create the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a></code> | The configuration settings for maintenance operations, including preferred maintenance windows and schedules. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.regionName">regionName</a></code> | <code>java.lang.String</code> | The Amazon Web Services Region for the router output. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>></code> | Key-value pairs that can be used to tag this router output. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.configuration"></a>

```java
public MediaconnectRouterOutputConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

The configuration settings for a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#configuration MediaconnectRouterOutput#configuration}

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maximumBitrate"></a>

```java
public java.lang.Number getMaximumBitrate();
```

- *Type:* java.lang.Number

The maximum bitrate for the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maximum_bitrate MediaconnectRouterOutput#maximum_bitrate}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#name MediaconnectRouterOutput#name}

---

##### `routingScope`<sup>Required</sup> <a name="routingScope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.routingScope"></a>

```java
public java.lang.String getRoutingScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}.

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone where you want to create the router output.

This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#availability_zone MediaconnectRouterOutput#availability_zone}

---

##### `maintenanceConfiguration`<sup>Optional</sup> <a name="maintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maintenanceConfiguration"></a>

```java
public MediaconnectRouterOutputMaintenanceConfiguration getMaintenanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

The configuration settings for maintenance operations, including preferred maintenance windows and schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#maintenance_configuration MediaconnectRouterOutput#maintenance_configuration}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

The Amazon Web Services Region for the router output. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#region_name MediaconnectRouterOutput#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediaconnectRouterOutputTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>>

Key-value pairs that can be used to tag this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#tags MediaconnectRouterOutput#tags}

---

### MediaconnectRouterOutputConfiguration <a name="MediaconnectRouterOutputConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfiguration;

MediaconnectRouterOutputConfiguration.builder()
//  .mediaConnectFlow(MediaconnectRouterOutputConfigurationMediaConnectFlow)
//  .mediaLiveInput(MediaconnectRouterOutputConfigurationMediaLiveInput)
//  .standard(MediaconnectRouterOutputConfigurationStandard)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaConnectFlow">mediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | Configuration settings for connecting a router output to a MediaConnect flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaLiveInput">mediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | Configuration settings for connecting a router output to a MediaLive input. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a></code> | The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone. |

---

##### `mediaConnectFlow`<sup>Optional</sup> <a name="mediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaConnectFlow"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlow getMediaConnectFlow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

Configuration settings for connecting a router output to a MediaConnect flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_connect_flow MediaconnectRouterOutput#media_connect_flow}

---

##### `mediaLiveInput`<sup>Optional</sup> <a name="mediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaLiveInput"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInput getMediaLiveInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

Configuration settings for connecting a router output to a MediaLive input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_input MediaconnectRouterOutput#media_live_input}

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.standard"></a>

```java
public MediaconnectRouterOutputConfigurationStandard getStandard();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#standard MediaconnectRouterOutput#standard}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlow <a name="MediaconnectRouterOutputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlow;

MediaconnectRouterOutputConfigurationMediaConnectFlow.builder()
//  .destinationTransitEncryption(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption)
//  .flowArn(java.lang.String)
//  .flowSourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The ARN of the flow to connect to this router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowSourceArn">flowSourceArn</a></code> | <code>java.lang.String</code> | The ARN of the flow source to connect to this router output. |

---

##### `destinationTransitEncryption`<sup>Optional</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.destinationTransitEncryption"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption getDestinationTransitEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}

---

##### `flowArn`<sup>Optional</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

The ARN of the flow to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#flow_arn MediaconnectRouterOutput#flow_arn}

---

##### `flowSourceArn`<sup>Optional</sup> <a name="flowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowSourceArn"></a>

```java
public java.lang.String getFlowSourceArn();
```

- *Type:* java.lang.String

The ARN of the flow source to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#flow_source_arn MediaconnectRouterOutput#flow_source_arn}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption;

MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.builder()
//  .encryptionKeyConfiguration(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration)
//  .encryptionKeyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for flow transit encryption keys. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyType">encryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}. |

---

##### `encryptionKeyConfiguration`<sup>Optional</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration getEncryptionKeyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for flow transit encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}

---

##### `encryptionKeyType`<sup>Optional</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyType"></a>

```java
public java.lang.String getEncryptionKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}.

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration;

MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.builder()
//  .automatic(java.lang.String)
//  .secretsManager(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic">automatic</a></code> | <code>java.lang.String</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```java
public java.lang.String getAutomatic();
```

- *Type:* java.lang.String

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}

---

##### `secretsManager`<sup>Optional</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getSecretsManager();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;

MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.builder()
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationMediaLiveInput <a name="MediaconnectRouterOutputConfigurationMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInput;

MediaconnectRouterOutputConfigurationMediaLiveInput.builder()
//  .destinationTransitEncryption(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption)
//  .mediaLiveInputArn(java.lang.String)
//  .mediaLivePipelineId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLiveInputArn">mediaLiveInputArn</a></code> | <code>java.lang.String</code> | The ARN of the MediaLive input to connect to this router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLivePipelineId">mediaLivePipelineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id MediaconnectRouterOutput#media_live_pipeline_id}. |

---

##### `destinationTransitEncryption`<sup>Optional</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.destinationTransitEncryption"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption getDestinationTransitEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive.

This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}

---

##### `mediaLiveInputArn`<sup>Optional</sup> <a name="mediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLiveInputArn"></a>

```java
public java.lang.String getMediaLiveInputArn();
```

- *Type:* java.lang.String

The ARN of the MediaLive input to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_input_arn MediaconnectRouterOutput#media_live_input_arn}

---

##### `mediaLivePipelineId`<sup>Optional</sup> <a name="mediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLivePipelineId"></a>

```java
public java.lang.String getMediaLivePipelineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id MediaconnectRouterOutput#media_live_pipeline_id}.

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption;

MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.builder()
//  .encryptionKeyConfiguration(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration)
//  .encryptionKeyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for the MediaLive transit encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyType">encryptionKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}. |

---

##### `encryptionKeyConfiguration`<sup>Optional</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration getEncryptionKeyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for the MediaLive transit encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}

---

##### `encryptionKeyType`<sup>Optional</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyType"></a>

```java
public java.lang.String getEncryptionKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}.

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration;

MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.builder()
//  .automatic(java.lang.String)
//  .secretsManager(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic">automatic</a></code> | <code>java.lang.String</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```java
public java.lang.String getAutomatic();
```

- *Type:* java.lang.String

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}

---

##### `secretsManager`<sup>Optional</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getSecretsManager();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager;

MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.builder()
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationStandard <a name="MediaconnectRouterOutputConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandard;

MediaconnectRouterOutputConfigurationStandard.builder()
//  .networkInterfaceArn(java.lang.String)
//  .protocol(java.lang.String)
//  .protocolConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.networkInterfaceArn">networkInterfaceArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the network interface associated with the standard router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#protocol MediaconnectRouterOutput#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration settings for a router output. |

---

##### `networkInterfaceArn`<sup>Optional</sup> <a name="networkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.networkInterfaceArn"></a>

```java
public java.lang.String getNetworkInterfaceArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the network interface associated with the standard router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#network_interface_arn MediaconnectRouterOutput#network_interface_arn}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#protocol MediaconnectRouterOutput#protocol}.

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocolConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfiguration getProtocolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

The protocol configuration settings for a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#protocol_configuration MediaconnectRouterOutput#protocol_configuration}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration;

MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.builder()
//  .rist(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist)
//  .rtp(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp)
//  .srtCaller(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller)
//  .srtListener(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration. |

---

##### `rist`<sup>Optional</sup> <a name="rist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rist"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist getRist();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#rist MediaconnectRouterOutput#rist}

---

##### `rtp`<sup>Optional</sup> <a name="rtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rtp"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp getRtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#rtp MediaconnectRouterOutput#rtp}

---

##### `srtCaller`<sup>Optional</sup> <a name="srtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller getSrtCaller();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#srt_caller MediaconnectRouterOutput#srt_caller}

---

##### `srtListener`<sup>Optional</sup> <a name="srtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener getSrtListener();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#srt_listener MediaconnectRouterOutput#srt_listener}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.builder()
//  .destinationAddress(java.lang.String)
//  .destinationPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The destination IP address for the RIST protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | The destination port number for the RIST protocol in the router output configuration. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The destination IP address for the RIST protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

The destination port number for the RIST protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.builder()
//  .destinationAddress(java.lang.String)
//  .destinationPort(java.lang.Number)
//  .forwardErrorCorrection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The destination IP address for the RTP protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | The destination port number for the RTP protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrection">forwardErrorCorrection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#forward_error_correction MediaconnectRouterOutput#forward_error_correction}. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The destination IP address for the RTP protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

The destination port number for the RTP protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

##### `forwardErrorCorrection`<sup>Optional</sup> <a name="forwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrection"></a>

```java
public java.lang.String getForwardErrorCorrection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#forward_error_correction MediaconnectRouterOutput#forward_error_correction}.

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.builder()
//  .destinationAddress(java.lang.String)
//  .destinationPort(java.lang.Number)
//  .encryptionConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration)
//  .minimumLatencyMilliseconds(java.lang.Number)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | The destination IP address for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | The destination port number for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | The minimum latency in milliseconds for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID for the SRT protocol in caller mode. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

The destination IP address for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

The destination port number for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}

---

##### `minimumLatencyMilliseconds`<sup>Optional</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

The minimum latency in milliseconds for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#stream_id MediaconnectRouterOutput#stream_id}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.builder()
//  .encryptionKey(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.property.encryptionKey"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.builder()
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.builder()
//  .encryptionConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration)
//  .minimumLatencyMilliseconds(java.lang.Number)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | The minimum latency in milliseconds for the SRT protocol in listener mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.port">port</a></code> | <code>java.lang.Number</code> | The port number for the SRT protocol in listener mode. |

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.encryptionConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}

---

##### `minimumLatencyMilliseconds`<sup>Optional</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

The minimum latency in milliseconds for the SRT protocol in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number for the SRT protocol in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#port MediaconnectRouterOutput#port}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.builder()
//  .encryptionKey(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.property.encryptionKey"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey;

MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.builder()
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputMaintenanceConfiguration <a name="MediaconnectRouterOutputMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputMaintenanceConfiguration;

MediaconnectRouterOutputMaintenanceConfiguration.builder()
//  .default(java.lang.String)
//  .preferredDayTime(MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.default">default</a></code> | <code>java.lang.String</code> | Configuration settings for default maintenance scheduling. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.preferredDayTime">preferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | Configuration for preferred day and time maintenance settings. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Configuration settings for default maintenance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#default MediaconnectRouterOutput#default}

---

##### `preferredDayTime`<sup>Optional</sup> <a name="preferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.preferredDayTime"></a>

```java
public MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime getPreferredDayTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

Configuration for preferred day and time maintenance settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#preferred_day_time MediaconnectRouterOutput#preferred_day_time}

---

### MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime <a name="MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime;

MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.builder()
//  .day(java.lang.String)
//  .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.day">day</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#day MediaconnectRouterOutput#day}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.time">time</a></code> | <code>java.lang.String</code> | The preferred time for maintenance operations. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#day MediaconnectRouterOutput#day}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

The preferred time for maintenance operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#time MediaconnectRouterOutput#time}

---

### MediaconnectRouterOutputTags <a name="MediaconnectRouterOutputTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputTags;

MediaconnectRouterOutputTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#key MediaconnectRouterOutput#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#value MediaconnectRouterOutput#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#key MediaconnectRouterOutput#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_output#value MediaconnectRouterOutput#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">putSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">resetSecretsManager</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretsManager` <a name="putSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```java
public void putSecretsManager(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```java
public void resetAutomatic()
```

##### `resetSecretsManager` <a name="resetSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```java
public void resetSecretsManager()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">automaticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">secretsManagerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference getSecretsManager();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```java
public java.lang.String getAutomaticInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerInput`<sup>Optional</sup> <a name="secretsManagerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getSecretsManagerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```java
public java.lang.String getAutomatic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;

new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference;

new MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">putEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">resetEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyType">resetEncryptionKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKeyConfiguration` <a name="putEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```java
public void putEncryptionKeyConfiguration(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `resetEncryptionKeyConfiguration` <a name="resetEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```java
public void resetEncryptionKeyConfiguration()
```

##### `resetEncryptionKeyType` <a name="resetEncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```java
public void resetEncryptionKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">encryptionKeyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">encryptionKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference getEncryptionKeyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyConfigurationInput`<sup>Optional</sup> <a name="encryptionKeyConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration getEncryptionKeyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `encryptionKeyTypeInput`<sup>Optional</sup> <a name="encryptionKeyTypeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```java
public java.lang.String getEncryptionKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```java
public java.lang.String getEncryptionKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference;

new MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption">putDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetDestinationTransitEncryption">resetDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowArn">resetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowSourceArn">resetFlowSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationTransitEncryption` <a name="putDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption"></a>

```java
public void putDestinationTransitEncryption(MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---

##### `resetDestinationTransitEncryption` <a name="resetDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetDestinationTransitEncryption"></a>

```java
public void resetDestinationTransitEncryption()
```

##### `resetFlowArn` <a name="resetFlowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowArn"></a>

```java
public void resetFlowArn()
```

##### `resetFlowSourceArn` <a name="resetFlowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowSourceArn"></a>

```java
public void resetFlowSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryptionInput">destinationTransitEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArnInput">flowSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn">flowSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationTransitEncryption`<sup>Required</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference getDestinationTransitEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a>

---

##### `destinationTransitEncryptionInput`<sup>Optional</sup> <a name="destinationTransitEncryptionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryptionInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption getDestinationTransitEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `flowSourceArnInput`<sup>Optional</sup> <a name="flowSourceArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArnInput"></a>

```java
public java.lang.String getFlowSourceArnInput();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `flowSourceArn`<sup>Required</sup> <a name="flowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn"></a>

```java
public java.lang.String getFlowSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">putSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">resetSecretsManager</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretsManager` <a name="putSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```java
public void putSecretsManager(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```java
public void resetAutomatic()
```

##### `resetSecretsManager` <a name="resetSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```java
public void resetSecretsManager()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">automaticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">secretsManagerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference getSecretsManager();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```java
public java.lang.String getAutomaticInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerInput`<sup>Optional</sup> <a name="secretsManagerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getSecretsManagerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```java
public java.lang.String getAutomatic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;

new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference;

new MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">putEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">resetEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyType">resetEncryptionKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKeyConfiguration` <a name="putEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```java
public void putEncryptionKeyConfiguration(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `resetEncryptionKeyConfiguration` <a name="resetEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```java
public void resetEncryptionKeyConfiguration()
```

##### `resetEncryptionKeyType` <a name="resetEncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```java
public void resetEncryptionKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">encryptionKeyConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">encryptionKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference getEncryptionKeyConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyConfigurationInput`<sup>Optional</sup> <a name="encryptionKeyConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration getEncryptionKeyConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `encryptionKeyTypeInput`<sup>Optional</sup> <a name="encryptionKeyTypeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```java
public java.lang.String getEncryptionKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```java
public java.lang.String getEncryptionKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---


### MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference;

new MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption">putDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetDestinationTransitEncryption">resetDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLiveInputArn">resetMediaLiveInputArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLivePipelineId">resetMediaLivePipelineId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationTransitEncryption` <a name="putDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption"></a>

```java
public void putDestinationTransitEncryption(MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---

##### `resetDestinationTransitEncryption` <a name="resetDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetDestinationTransitEncryption"></a>

```java
public void resetDestinationTransitEncryption()
```

##### `resetMediaLiveInputArn` <a name="resetMediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLiveInputArn"></a>

```java
public void resetMediaLiveInputArn()
```

##### `resetMediaLivePipelineId` <a name="resetMediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLivePipelineId"></a>

```java
public void resetMediaLivePipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption">destinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryptionInput">destinationTransitEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArnInput">mediaLiveInputArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineIdInput">mediaLivePipelineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn">mediaLiveInputArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId">mediaLivePipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationTransitEncryption`<sup>Required</sup> <a name="destinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference getDestinationTransitEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a>

---

##### `destinationTransitEncryptionInput`<sup>Optional</sup> <a name="destinationTransitEncryptionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryptionInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption getDestinationTransitEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---

##### `mediaLiveInputArnInput`<sup>Optional</sup> <a name="mediaLiveInputArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArnInput"></a>

```java
public java.lang.String getMediaLiveInputArnInput();
```

- *Type:* java.lang.String

---

##### `mediaLivePipelineIdInput`<sup>Optional</sup> <a name="mediaLivePipelineIdInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineIdInput"></a>

```java
public java.lang.String getMediaLivePipelineIdInput();
```

- *Type:* java.lang.String

---

##### `mediaLiveInputArn`<sup>Required</sup> <a name="mediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn"></a>

```java
public java.lang.String getMediaLiveInputArn();
```

- *Type:* java.lang.String

---

##### `mediaLivePipelineId`<sup>Required</sup> <a name="mediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId"></a>

```java
public java.lang.String getMediaLivePipelineId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

---


### MediaconnectRouterOutputConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow">putMediaConnectFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput">putMediaLiveInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard">putStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaConnectFlow">resetMediaConnectFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaLiveInput">resetMediaLiveInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetStandard">resetStandard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMediaConnectFlow` <a name="putMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow"></a>

```java
public void putMediaConnectFlow(MediaconnectRouterOutputConfigurationMediaConnectFlow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---

##### `putMediaLiveInput` <a name="putMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput"></a>

```java
public void putMediaLiveInput(MediaconnectRouterOutputConfigurationMediaLiveInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

---

##### `putStandard` <a name="putStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard"></a>

```java
public void putStandard(MediaconnectRouterOutputConfigurationStandard value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

---

##### `resetMediaConnectFlow` <a name="resetMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaConnectFlow"></a>

```java
public void resetMediaConnectFlow()
```

##### `resetMediaLiveInput` <a name="resetMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaLiveInput"></a>

```java
public void resetMediaLiveInput()
```

##### `resetStandard` <a name="resetStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetStandard"></a>

```java
public void resetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow">mediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput">mediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standard">standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference">MediaconnectRouterOutputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlowInput">mediaConnectFlowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInputInput">mediaLiveInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standardInput">standardInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediaConnectFlow`<sup>Required</sup> <a name="mediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow"></a>

```java
public MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference getMediaConnectFlow();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a>

---

##### `mediaLiveInput`<sup>Required</sup> <a name="mediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput"></a>

```java
public MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference getMediaLiveInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a>

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standard"></a>

```java
public MediaconnectRouterOutputConfigurationStandardOutputReference getStandard();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference">MediaconnectRouterOutputConfigurationStandardOutputReference</a>

---

##### `mediaConnectFlowInput`<sup>Optional</sup> <a name="mediaConnectFlowInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlowInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaConnectFlow getMediaConnectFlowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---

##### `mediaLiveInputInput`<sup>Optional</sup> <a name="mediaLiveInputInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInputInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationMediaLiveInput getMediaLiveInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

---

##### `standardInput`<sup>Optional</sup> <a name="standardInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standardInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandard getStandardInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

---


### MediaconnectRouterOutputConfigurationStandardOutputReference <a name="MediaconnectRouterOutputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardOutputReference;

new MediaconnectRouterOutputConfigurationStandardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration">putProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetNetworkInterfaceArn">resetNetworkInterfaceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProtocolConfiguration` <a name="putProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```java
public void putProtocolConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---

##### `resetNetworkInterfaceArn` <a name="resetNetworkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetNetworkInterfaceArn"></a>

```java
public void resetNetworkInterfaceArn()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```java
public void resetProtocolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArnInput">networkInterfaceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn">networkInterfaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference getProtocolConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `networkInterfaceArnInput`<sup>Optional</sup> <a name="networkInterfaceArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArnInput"></a>

```java
public java.lang.String getNetworkInterfaceArnInput();
```

- *Type:* java.lang.String

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfiguration getProtocolConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceArn`<sup>Required</sup> <a name="networkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```java
public java.lang.String getNetworkInterfaceArn();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandard getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist">putRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp">putRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">putSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">putSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRist">resetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRtp">resetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">resetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">resetSrtListener</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRist` <a name="putRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```java
public void putRist(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---

##### `putRtp` <a name="putRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```java
public void putRtp(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---

##### `putSrtCaller` <a name="putSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```java
public void putSrtCaller(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `putSrtListener` <a name="putSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```java
public void putSrtListener(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `resetRist` <a name="resetRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```java
public void resetRist()
```

##### `resetRtp` <a name="resetRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```java
public void resetRtp()
```

##### `resetSrtCaller` <a name="resetSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```java
public void resetSrtCaller()
```

##### `resetSrtListener` <a name="resetSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```java
public void resetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist">rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">srtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">srtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">ristInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">rtpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">srtCallerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">srtListenerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rist`<sup>Required</sup> <a name="rist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference getRist();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `rtp`<sup>Required</sup> <a name="rtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference getRtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `srtCaller`<sup>Required</sup> <a name="srtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference getSrtCaller();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `srtListener`<sup>Required</sup> <a name="srtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference getSrtListener();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `ristInput`<sup>Optional</sup> <a name="ristInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist getRistInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---

##### `rtpInput`<sup>Optional</sup> <a name="rtpInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp getRtpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---

##### `srtCallerInput`<sup>Optional</sup> <a name="srtCallerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller getSrtCallerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `srtListenerInput`<sup>Optional</sup> <a name="srtListenerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener getSrtListenerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationPort"></a>

```java
public void resetDestinationPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPortInput">destinationPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPortInput"></a>

```java
public java.lang.Number getDestinationPortInput();
```

- *Type:* java.lang.Number

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrection">resetForwardErrorCorrection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationPort"></a>

```java
public void resetDestinationPort()
```

##### `resetForwardErrorCorrection` <a name="resetForwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrection"></a>

```java
public void resetForwardErrorCorrection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPortInput">destinationPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionInput">forwardErrorCorrectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">forwardErrorCorrection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPortInput"></a>

```java
public java.lang.Number getDestinationPortInput();
```

- *Type:* java.lang.Number

---

##### `forwardErrorCorrectionInput`<sup>Optional</sup> <a name="forwardErrorCorrectionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionInput"></a>

```java
public java.lang.String getForwardErrorCorrectionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

---

##### `forwardErrorCorrection`<sup>Required</sup> <a name="forwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```java
public java.lang.String getForwardErrorCorrection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey"></a>

```java
public void putEncryptionKey(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKeyInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey getEncryptionKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">resetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationAddress"></a>

```java
public void resetDestinationAddress()
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationPort"></a>

```java
public void resetDestinationPort()
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetMinimumLatencyMilliseconds` <a name="resetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```java
public void resetMinimumLatencyMilliseconds()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPortInput">destinationPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">minimumLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort">destinationPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a>

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddressInput"></a>

```java
public java.lang.String getDestinationAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPortInput"></a>

```java
public java.lang.Number getDestinationPortInput();
```

- *Type:* java.lang.Number

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---

##### `minimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="minimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```java
public java.lang.Number getMinimumLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort"></a>

```java
public java.lang.Number getDestinationPort();
```

- *Type:* java.lang.Number

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey"></a>

```java
public void putEncryptionKey(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKeyInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey getEncryptionKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference;

new MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">resetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetMinimumLatencyMilliseconds` <a name="resetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```java
public void resetMinimumLatencyMilliseconds()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">minimumLatencyMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">minimumLatencyMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration"></a>

```java
public MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfigurationInput"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---

##### `minimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="minimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```java
public java.lang.Number getMinimumLatencyMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `minimumLatencyMilliseconds`<sup>Required</sup> <a name="minimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```java
public java.lang.Number getMinimumLatencyMilliseconds();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---


### MediaconnectRouterOutputMaintenanceConfigurationOutputReference <a name="MediaconnectRouterOutputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputMaintenanceConfigurationOutputReference;

new MediaconnectRouterOutputMaintenanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime">putPreferredDayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetPreferredDayTime">resetPreferredDayTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferredDayTime` <a name="putPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime"></a>

```java
public void putPreferredDayTime(MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetPreferredDayTime` <a name="resetPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetPreferredDayTime"></a>

```java
public void resetPreferredDayTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime">preferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTimeInput">preferredDayTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferredDayTime`<sup>Required</sup> <a name="preferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```java
public MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference getPreferredDayTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `preferredDayTimeInput`<sup>Optional</sup> <a name="preferredDayTimeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTimeInput"></a>

```java
public IResolvable|MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime getPreferredDayTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputMaintenanceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

---


### MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference;

new MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetTime">resetTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetTime` <a name="resetTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetTime"></a>

```java
public void resetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---


### MediaconnectRouterOutputTagsList <a name="MediaconnectRouterOutputTagsList" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputTagsList;

new MediaconnectRouterOutputTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get"></a>

```java
public MediaconnectRouterOutputTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectRouterOutputTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>>

---


### MediaconnectRouterOutputTagsOutputReference <a name="MediaconnectRouterOutputTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_router_output.MediaconnectRouterOutputTagsOutputReference;

new MediaconnectRouterOutputTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectRouterOutputTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags">MediaconnectRouterOutputTags</a>

---



